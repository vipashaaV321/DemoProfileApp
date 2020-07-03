import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  myForm: FormGroup;
  myForm1:FormGroup;
  signup:Array<any>=[];
  acc:{}
  sid=0;
  timer:any
  constructor(private service: DataService, private route: ActivatedRoute,private rut:Router) { }

  ngOnInit(): void {
  
    this.sid=parseInt(sessionStorage.getItem('sid'));
    console.log("uid"+this.sid);
    // this.service.getsignupbyid(this.sid).then(res => {
    //   this.signup= res;})
    this.myForm = new FormGroup({
      sid: new FormControl(this.sid, Validators.required),
      username: new FormControl('', Validators.required),
      quora: new FormControl('', Validators.required),
      qcheck: new FormControl('true', Validators.required),
      yq: new FormControl('', Validators.required),
      yqcheck: new FormControl('true', Validators.required),

      github: new FormControl('', Validators.required),
      gitcheck: new FormControl('true', Validators.required),

      linkedin:new FormControl('',Validators.required),
      linkcheck:new FormControl('true',Validators.required),

      fb:new FormControl('',Validators.required),
      fbc:new FormControl('true',Validators.required),

      ig:new FormControl('',Validators.required),
      igc:new FormControl('true',Validators.required),

      snap:new FormControl('',Validators.required),
      snapc:new FormControl('true',Validators.required),

     
      
    })
    this.sid=parseInt(sessionStorage.getItem('sid'));

    this.myForm1 = new FormGroup({
      sid: new FormControl(this.sid, Validators.required),
      company:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required)

    })
    
  }
  submit(){
    this.service.adddetails(this.myForm.value).subscribe(res => {
      console.log(res);
      // this.ngOnInit();
     
    })
    this.sid=parseInt(sessionStorage.getItem('sid'));
    this.service.getlogin(this.myForm.value).subscribe(res=>{
      if(res.data[0]!=''){
        this.rut.navigate(['/profile/',res.data[0].sid]); 
        const time_to_login = Date.now() + 604800000; // one week
        sessionStorage.setItem('timer', JSON.stringify(time_to_login));
        sessionStorage.setItem("isSocial","true");    
    }
    else{
      console.log('failll')
    }
  })
    // this.rut.navigate(['/login']);
   

  }
  submit1(){
    this.service.addbusiness(this.myForm1.value).subscribe(res=>{
      console.log("business"+res);
    })
    this.sid=parseInt(sessionStorage.getItem('sid'));
    this.service.getlogin(this.myForm1.value).subscribe(res=>{
      if(res.data[0]!=''){
        this.rut.navigate(['/business/',res.data[0].sid]); 
        sessionStorage.setItem("isBusiess","true");    
    }
    else{
      console.log('failll')
    }
  })
  }

}
