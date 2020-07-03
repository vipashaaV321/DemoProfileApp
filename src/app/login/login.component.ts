import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timer } from 'rxjs/internal/observable/timer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form1: FormGroup;
  sid=0
  
  constructor(private Service:DataService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.form1 = new FormGroup({ 
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    
    })
    this.sid=this.route.snapshot.params.sid;
    console.log("id"+this.sid);
  }
 
  login(){
    this.Service.sendmail(this.form1.value).subscribe(res=>{
      console.log('hello')
    })
  this.Service.getlogin(this.form1.value).subscribe(res=>{
    if(res.data[0]!=''){
      // this.router.navigate(['/profile/',res.data[0].sid]);
      this.router.navigate(['/profile/',res.data[0].sid]);

      sessionStorage.setItem("islogin","true");
     // sessionStorage.setItem("isSocial","true");  
      // sessionStorage.setItem("isS","true");  
      const time_to_login = Date.now() + 604800000; // one week
        sessionStorage.setItem('timer', JSON.stringify(time_to_login));
      sessionStorage.setItem('sid',res.data[0].sid);
    
    
  }
  else{
    console.log('failll')
  }
})
  }


}
  


