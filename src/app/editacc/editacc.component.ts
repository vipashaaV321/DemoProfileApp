import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-editacc',
  templateUrl: './editacc.component.html',
  styleUrls: ['./editacc.component.css']
})
export class EditaccComponent implements OnInit {

  
  
  profile:Array<any>=[];
  username:any;
  sid=0;
  myForm: FormGroup;
    constructor(private route:ActivatedRoute,private service:DataService,private rut:Router){}
    ngOnInit(){
      this.sid=parseInt(sessionStorage.getItem('sid'));
      console.log("id"+this.sid);
   
  
    this.service.getdetailsbyid(this.sid).then(res => {
          this.profile= res;
      console.log(res);
      console.log(this.sid);
        this.myForm = new FormGroup({
          sid: new FormControl(this.profile[0].sid, Validators.required),

          username: new FormControl(this.profile[0].username, Validators.required),
  
          quora: new FormControl(this.profile[0].quora, Validators.required),
  
          qcheck: new FormControl(this.profile[0].qcheck, Validators.required),
          yq: new FormControl(this.profile[0].yq, Validators.required),
  
          yqcheck: new FormControl(this.profile[0].yqcheck, Validators.required),
          github: new FormControl(this.profile[0].github, Validators.required),
  
          gitcheck: new FormControl(this.profile[0].gitcheck, Validators.required),
          linkedin: new FormControl(this.profile[0].linkedin, Validators.required),
  
          linkcheck: new FormControl(this.profile[0].linkcheck, Validators.required),
          fb: new FormControl(this.profile[0].fb, Validators.required),
  
          fbc: new FormControl(this.profile[0].fbc, Validators.required),
          ig: new FormControl(this.profile[0].ig, Validators.required),
  
          igc: new FormControl(this.profile[0].igc, Validators.required),
          snap: new FormControl(this.profile[0].snap, Validators.required),
  
          snapc: new FormControl(this.profile[0].snapc, Validators.required),
        
         
        })
        
      });
      
    
  }
  submit(){
    this.service.updatedetails(this.myForm.value).subscribe(res=>{
      console.log(res);
  
    })
    this.service.getdetailsbyid(this.sid).then(res => {
      this.profile= res;})
  
  }
  }