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
}
