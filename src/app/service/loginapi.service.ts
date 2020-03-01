import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common//http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {
  apiBaseUrl: string = environment.ApiPrefix+"://"+environment.ApiIP+":"+environment.ApiPort;
  apiurl: string = this.apiBaseUrl+environment.ApiAdminPath;
  token:string =environment.token;
  header:any =new Headers({'Content-Type':'application/json','No-auth':'True'});

  constructor(private http: HttpClient) {
    this.header.append('authorizationKey',this.token);
  }

  ValidateUser(data: {}): Observable<any> {
    return this.http.post(this.apiurl+'/UserLogin/', data,{headers:this.header});
    //return this.http.post('http://localhost:56992/api/login', data);
  }
  RegisterUser(data: {}): Observable<any> {
    return this.http.post('http://localhost:56992/api/register', data);
  }

  // PlazaData1(): Observable<any> {
  //  //return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  //  return this.http.get(this.apiurl+'GantryAll/', {headers:this.header});
    
  // }
  
  AddNewPlaza(data: {}): Observable<any> {
    console.log('data check::', data)
   // return this.http.post('http://dummy.restapiexample.com/api/v1/create', data);
   return this.http.post(this.apiurl+'GantryAll/', {headers:this.header},data);
  }

  UpdateNewPlaza(tmsId:any,data:any): Observable<any>{
    console.log('data check for update::',tmsId,data)
    return this.http.put(this.apiurl+'GantryAll/', {headers:this.header},data);
  }
  

  //    GetLaneMaster(): Observable<any>{
  //    return this.http.get(this.apiurl+'GetLaneMaster/', {headers:this.header});
  //  }

   AddNewLane(data: {}): Observable<any> {
     console.log('data check::', data)
     return this.http.post(this.apiurl+'GetLaneMaster/', {headers:this.header},data);
   }

   UpdateNewLane(LaneMasterId:any,data:any): Observable<any>{
    console.log('data check for update::',LaneMasterId,data)
    return this.http.put(this.apiurl+'GetLaneMaster/', {headers:this.header},data);
  }
}
