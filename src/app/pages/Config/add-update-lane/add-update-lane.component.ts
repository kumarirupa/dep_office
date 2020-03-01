import { Component, Input, OnInit } from '@angular/core';
import { LoginapiService } from 'src/app/service/loginapi.service';

import { FormBuilder,FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-update-lane',
  templateUrl: './add-update-lane.component.html',
  styleUrls: ['./add-update-lane.component.css']
})
export class AddUpdateLaneComponent implements OnInit {

  LaneData:any;
  // empData = {
  //   name: '',
  //   salary: '',
  //   age:''
  // };

  selectedLane = {
    LaneMasterId:'',
    GantryName: '',
    LaneNumber: '',
    LaneName:'',
    LaneTypeName: '',
    DS: ''
  }
 //selectedLane: any;
  openModal = '';
  isAdded = false;

  @Input('openPopup')
  
  set data(openPopup: any) {
    if(openPopup.data){
      this.selectedLane = openPopup.data
      console.log('yes yes', this.selectedLane)
    }
      this.openModal = openPopup.status
      
    console.log('gtiingue::', openPopup.status)
  }




  constructor(private api:LoginapiService) { }

  ngOnInit(): void {
  }
    



  addLane(form: NgForm){
    console.log('addloyee func call::::::', this.LaneData)
    this.api.AddNewLane(this.LaneData).subscribe(
      res => {
        this.isAdded = true;
        console.log('add response::::::::::', res)
      },
      err => {
        console.log('add error::::::', err)
      }

    )
  }

  updateLane(form: NgForm){
    console.log('updatea::::::', this.selectedLane)
    let obj ={
      // "gantryId": this.selectedLane.gantryId,
      "GantryName": this.selectedLane.GantryName,
      "laneNumber": this.selectedLane.LaneNumber,
      "laneName": this.selectedLane.LaneName,
      "laneTypeName": this.selectedLane.LaneTypeName,
      "dataStatus": this.selectedLane.DS
    }

    this.api.UpdateNewLane(this.selectedLane.LaneMasterId, obj).subscribe(
      res => {
        console.log('Update response::::::::::', res)
      },
      err => {
        console.log('Update error::::::', err)
      }

    )
  }

  closeModal(){
    this.openModal = '';
    console.log('checktus::', this.openModal)
  }

}
