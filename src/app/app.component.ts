import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatabaseService } from './service/database.service';
declare var $:any;
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DEP-BackOffice';
  route:any;
  ClientFirstName:String;
  ClientSecondName:String;
  userId='0';
  loginstatus: boolean = false;
  showNavText: boolean = false;
  MenuList:any;
  currentRoute:string;

  constructor(private authService: AuthService,location: Location, router: Router,
    private dbService: DatabaseService){

    if(this.authService.loggedInStatus){
      this.loginstatus=true;
    }

    this.authService.MasterCompDisplay.subscribe(
      (visibility: boolean)  => {
        this.loginstatus = visibility;
      });

    this.authService.MenuRequest.subscribe(
      (MenuList: JSON)  => {
        this.MenuList=MenuList;
      });

    this.userId= this.authService.getUserDetails();

    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path().replace('/','');
        this.currentRoute=this.route;
      }
      else {
        this.route = 'login'
      }
    });
  }

  ngOnInit()
  {
    this.ClientFirstName=environment.ClientFirstName;
    this.ClientSecondName=environment.ClientSecondName;
    this.userId= this.authService.getUserDetails();
    this.BindMenu();
  }

  BindMenu()
   {
      if(this.userId!=undefined||null)
      {
      const obj={UserId:this.userId}
      this.dbService.AllMenuList(obj).then
      (
      (val)=>
      {
        this.MenuList=val;
        console.log(this.MenuList);
      },
      (err) => console.error(err)
      )
      }
   }
 
  showChild(ctrl)
  {
    var parent=$(ctrl.currentTarget).parent();
    if( $(parent).find('.dropdown-container').is(":visible"))
    {
      $(parent).find('.dropdown-container').hide()
    }
    else
    {
        $('.dropdown-container').hide();
        $(parent).find('.dropdown-container').show()
    }
  }

  onMenuBtnClick()
  {
    let myDiv = document.getElementById('sidecontain');
    this.showNavText = !this.showNavText;
    if(this.showNavText)
      myDiv.style.marginLeft = '150px';
    else
      myDiv.style.marginLeft = '50px';
  }

  ChangePasswordPopUp()
  {
    
  }

  logoutUser()
  {
    this.authService.logout();
  }

}
