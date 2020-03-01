import { Component, OnInit } from '@angular/core';
import { LoginapiService } from '../../service/loginapi.service';
import { User } from '../../service/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private api: LoginapiService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    };
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/register']);
  }
  OnSubmit(form: NgForm) {
    const obj =  form.value;
    this.api.RegisterUser(obj)
      .subscribe(data => {
        // console.log(data); // receives data returned by post like console.log(data);
        alert(data);
        this.reloadComponent();
      },
        (error) => {
          console.log('error');
          }
      );
  }
}
