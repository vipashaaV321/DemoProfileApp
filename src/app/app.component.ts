import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demopr';
  sid=0;
  constructor(private service: DataService, private route: ActivatedRoute,private rut:Router) { }

  ngOnInit(): void {
    this.sid=this.route.snapshot.params.sid;
    // console.log("id"+this.sid);
  }
  get isloggedin(){
    this.sid=parseInt(sessionStorage.getItem('islogin'));
   
    return this.service.isloggedin();
  
  }
  get isloggedinB(){
    if (sessionStorage.getItem('isBusiess')) {
      return this.service.isloggedinB();
    }

  }
  logout(){
    sessionStorage.removeItem('islogin');
    sessionStorage.removeItem('sid');
sessionStorage.removeItem('isBusiess');

    // sessionStorage.removeItem('isloginf');

    this.rut.navigate(['/']);
  }
}
