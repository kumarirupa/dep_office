import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})
export class LaneComponent implements OnInit {
  LaneData:any;
  constructor(private dbService: DatabaseService,) { }

  ngOnInit(): void {
    this.GetLaneDetails();
  }

  GetLaneDetails()
  {
    const Obj={
      GantryId:0,
      LaneTypeId:0
    }
    this.dbService.GetLaneMaster(Obj).subscribe(
      data => {
        this.LaneData=data;
        console.log(this.LaneData);
      },
      (error) => {
        }
    );
  }
}
