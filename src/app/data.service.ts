import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  addsignup(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}addsignup`, model);
  }
  sendmail(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}sendmail`, model);
  }
  // sendmail():Promise<any>{
  //   return this.http.post(`${environment.Base_Url}sendmail`).toPromise();
  // }
  addacc(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}addacc`, model);
  }
  addbusiness(model:any):Observable<any>{
    return this.http.post(`${environment.Base_Url}addbusiness`,model);
  }
  getsignup(): Promise<any> {
    return this.http.get(`${environment.Base_Url}getsignup`).toPromise();
  }
  getbusinessbyid(sid:any):Promise<any>{
    return this.http.get(`${environment.Base_Url}getbusinessbyid/${sid}`).toPromise();
  }
  getsignupbyid(sid:any): Promise<any> {
    return this.http.get(`${environment.Base_Url}getsignupbyid/${sid}`).toPromise();
  }
  getaccbyid(sid:any): Promise<any> {
    return this.http.get(`${environment.Base_Url}getaccbyid/${sid}`).toPromise();
  }
  getdetailsbyid(sid:any): Promise<any> {
    return this.http.get(`${environment.Base_Url}getdetailsbyid/${sid}`).toPromise();
  }
  getlogin(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}getlogin`, model);
  }
  deletebusiness(sid:number):Observable<any>{
    return this.http.delete(`${environment.Base_Url}deletebusiness/${sid}`);
  }
  deletesignup(sid:number): Observable<any> {
    return this.http.delete(`${environment.Base_Url}deletesignup/${sid}`);
  }
  deletedetails(sid: any): Observable<any> {
    return this.http.delete(`${environment.Base_Url}deletedetails/${sid}`);
  }
  adddetails(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}adddetails`, model);
  }
  getdetails(): Promise<any> {
    return this.http.get(`${environment.Base_Url}getdetails`).toPromise();
  }
  updatesignup(model: any): Observable<any> {
    return this.http.put(`${environment.Base_Url}updatesignup`, model);
  }
  updatedetails(model: any): Observable<any> {
    return this.http.put(`${environment.Base_Url}updatedetails`, model);
  }
  updatebusiness(model:any):Observable<any>{
    return this.http.put(`${environment.Base_Url}updatebusiness`,model);
  }
  isloggedin() {
    if (sessionStorage.getItem('islogin')) {
      return true;
    }
    return false;
  }
  isloggedinB() {
    if (sessionStorage.getItem('isBusiess')) {
      return true;
    }
    return false;
  }
  logout() {
    sessionStorage.removeItem('islogin');
    // sessionStorage.removeItem('isloginf');
  }
}
