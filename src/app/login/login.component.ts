import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginapiService } from '../service/loginapi.service';
import { AuthService } from '../auth/auth.service';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  MenuList:any;
  loginReposnse:any;
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
     private router: Router,
     private api: LoginapiService,
     private authService: AuthService,
     private dbService: DatabaseService) 
     {

    }

  ngOnInit() {
    this.authService.ClearData();
    this.loginForm = this.formBuilder.group({
      Loginname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });
  }

  get f() { return this.loginForm.controls; }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/login']);
  }

  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      const obj = {
        LoginId: this.loginForm.value.Loginname,
        Password: this.loginForm.value.password
      };
      this.api.ValidateUser(obj).subscribe(
        data => {
          var jsnoData=data;
          this.loginReposnse=data;
          console.log(this.loginReposnse);
          this.BindMenu();
          
        },
        (error) => {
          this.reloadComponent();
          alert('error');
        }
      );
    }

    BindMenu() {
       const obj={UserId:this.loginReposnse.UserId}
      this.dbService.AllMenuList(obj).then
      (
      (val)=>
      {
        this.MenuList=val;
        console.log(this.MenuList);
        this.authService.Alogin(this.loginReposnse.RedirectTo,this.loginReposnse,this.MenuList);
      },
      (err) => console.error(err)
      )
      
  }

  }
