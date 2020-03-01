import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-plaza',
  templateUrl: './plaza.component.html',
  styleUrls: ['./plaza.component.css']
})
export class PlazaComponent implements OnInit {
  PlazaData:any;
  constructor(private dbService: DatabaseService,) { }

  ngOnInit(): void {
    this.GetPlazaDetails();
  }

  GetPlazaDetails()
  {
    const Obj={
      HardwareType:0
    }
    this.dbService.GetGantryMaster().subscribe(
      data => {
        this.PlazaData=data;
        console.log(this.PlazaData);
      },
      (error) => {
        alert(error);
        }
    );
  }
}
