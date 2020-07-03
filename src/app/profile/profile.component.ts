import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { SelectItem } from 'primeng/api';
import { City } from '../city';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Array<any>=[];
  username:any;
  sid=0;
  myForm: FormGroup;
  signup:Array<any>=[];
  acc:{}
  qrcodename : string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href : string;
 name:String
 cities1: SelectItem[];
 selectedCities1: City[];
  constructor(private route:ActivatedRoute,private service:DataService,private rut:Router,private bnIdle: BnNgIdleService) {
    this.bnIdle.startWatching(1296000).subscribe((res) => {
      if(res) {
          console.log("session expired");
          this.service.logout();
      }
    })
    this.cities1 = [
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
   }
   ngOnInit() {

   
    this.sid=this.route.snapshot.params.sid;
  
    this.service.getdetailsbyid(this.sid).then(res=>{
      this.profile=res;
      console.log(res);
    })
    this.service.getsignupbyid(this.sid).then(res => {
      this.signup= res;
      this.name=this.signup[0].name;
    console.log(res);
    // console.log(this.sid);
    this.myForm = new FormGroup({
      sid: new FormControl(this.signup[0].sid, Validators.required),
      name:new FormControl(this.signup[0].name,Validators.required),
      contact:new FormControl(this.signup[0].contact,Validators.required),
      email:new FormControl(this.signup[0].email,Validators.required),
      username:new FormControl(this.signup[0].username,Validators.required),
      password:new FormControl(this.signup[0].password,Validators.required)
     
    })
    
  });
  }
  submit(){
    this.sid=this.route.snapshot.params.sid;
    this.service.updatesignup(this.myForm.value).subscribe(res => {
      console.log('update');
        // this.messageService.add({severity:'success', summary:'Data Added', detail:'Course Updated Successfully'});


        })
        this.service.getsignupbyid(this.sid).then(res => {
          this.signup= res;})

}
delete(value){
  console.log(value);
  console.log("hello");
  
    this.service.deletedetails(value).subscribe(res=>{
      console.log("hello");
      

  })
  this.service.deletesignup(value).subscribe(res=>{
    console.log("hello");
    

})
 
  this.rut.navigate(['/']);
  sessionStorage.removeItem('islogin');
    sessionStorage.removeItem('sid');

  

}
generateQRCode(){
  if(this.qrcodename == ''){
    this.display = false;
    alert("Please enter the name");
    return;
  }
  else{
    this.value = this.qrcodename;
    this.display = true;
  }
}
downloadImage(){
  this.href = document.getElementsByTagName('img')[0].src;
}
get isloggedin(){
  this.sid=parseInt(sessionStorage.getItem('islogin'));
 
  return this.service.isloggedin();

}
}
