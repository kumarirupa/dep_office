import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  RoleData:any;
  constructor(private dbService: DatabaseService,) { }

  ngOnInit(): void {
    this.GetRoleData();
  }

  GetRoleData()
  {
    this.dbService.RoleData().subscribe(
      data => {
       this.RoleData=data;
       console.log(this.RoleData);
      },
      (error) => {
        console.log(error);
        }
    );
  }
}
