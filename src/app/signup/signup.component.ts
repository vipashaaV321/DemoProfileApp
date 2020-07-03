import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { sanitizeIdentifier } from '@angular/compiler';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  signup:Array<any>=[];
  acc:{}
  sid=0
  constructor(private service: DataService, private route: ActivatedRoute,private rut:Router) { }

  ngOnInit(): void {
   
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      
    })
     

  }
  submit(){
    this.service.addsignup(this.myForm.value).subscribe(res => {
      console.log(res);   
    })
    this.service.getlogin(this.myForm.value).subscribe(res=>{
      if(res.data[0]!=''){
      console.log(res.data[0].sid);
        sessionStorage.setItem("islogin","true");
        sessionStorage.setItem('sid',res.data[0].sid);
        const time_to_login = Date.now() + 604800000; // one week
        sessionStorage.setItem('timer', JSON.stringify(time_to_login));
        this.rut.navigate(['/details']);
    }
    else{
      console.log('failll')
    }
  })
  }


}
