import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginapiService } from 'src/app/service/loginapi.service';



@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})
export class LaneComponent implements OnInit {
  LaneData:any;
  openPopup: any;
  openUpdatePopup: any;
  LaneValue = '';
  openUpdateModal = false;
  openAddModal = false;
  selectedLane = {
    LaneMasterId:'',
    GantryName: '',
    LaneNumber: '',
    LaneName:'',
    LaneTypeName: '',
    DS: ''
  }
  //selectedLane:any;
  constructor(private dbService: DatabaseService, private api: LoginapiService) { }

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

  modalUpdateOpen(data){
    this.openUpdateModal = true
    this.selectedLane = data
    console.log('data::', this.selectedLane)

  }

  modalAddOpen(){
    console.log('addc callig')
    
    this.openAddModal = true
  }

  closeModal(){
    this.openUpdateModal = false
    this.openAddModal = false

  }

  addLane(form: NgForm){
    console.log('hdghdfs::', this.LaneData)
    this.api.AddNewLane(this.LaneData).subscribe(
      res => {
        console.log('add response::::::::::', res)
      },
      err => {
        console.log('add error::::::', err)
      }

    )
  }
  updateLane(form: NgForm){
    console.log('updatea::::::', this.selectedLane)
    // this.api.AddNewEmp(this.empData).subscribe(
    //   res => {
    //     console.log('add response::::::::::', res)
    //   },
    //   err => {
    //     console.log('add error::::::', err)
    //   }

    // )
  }

  discoverClicked(){
    this.openPopup = {status: 'openAddPopup'};
   
}
  openUpdatePopupCall(data){
  this.openPopup = {status: 'openUpdatePopup', data: data};
}
}



