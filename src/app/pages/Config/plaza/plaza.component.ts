import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
//import { LoginapiService } from './service/loginapi.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginapiService } from 'src/app/service/loginapi.service';


@Component({
  selector: 'app-plaza',
  templateUrl: './plaza.component.html',
  styleUrls: ['./plaza.component.css']
})
export class PlazaComponent implements OnInit {
  PlazaData: any;



 //UpdatePlazaData: any;



 plazavalue = '';


 openUpdateModal = false;
  openAddModal = false;
  selectedLane = {
    tmsId: '',
    gantryName: '',
    location: '',
    ipAddress: '',
    ds: ''
  }
 
 
  constructor(private dbService: DatabaseService, private api: LoginapiService) { }

  ngOnInit(): void {
    this.GetPlazaDetails();
    //getTableData:::::::::

    //  this.api.PlazaData1().subscribe(
    //   response => {
    //     //console.log('calling api', response);
    //     this.plazavalue = response

    //     console.log('PlazaData Response array::::::', this.plazavalue);
    //   },
    //   (error) => {
    //     alert('error');
    //   }
    // );
  }

  GetPlazaDetails() {
    const Obj = {
      HardwareType: 0
    }
    this.dbService.GetGantryMaster().subscribe(
      data => {
        this.PlazaData = data;
        console.log(this.PlazaData);
      },
      (error) => {
        alert(error);
      }
    );
  }


  
  updatePlaza(form: NgForm){
    console.log('update data::::::', this.selectedLane)
    // this.api.AddNewEmp(this.empData).subscribe(
    //   res => {
    //     console.log('add emp response::::::::::', res)
    //   },
    //   err => {
    //     console.log('add emp error::::::', err)
    //   }

    // )
  }
//}






modalUpdateOpen(data){
  this.openUpdateModal = true
  this.selectedLane = data
  console.log('data::::::', this.selectedLane)

}


modalAddOpen(){
  this.openAddModal = true
}

closeModal(){
  this.openUpdateModal = false
  this.openAddModal = false

}

addPlaza(form: NgForm){
  //console.log('hdghdfs::::::', this. PlazaData)
  this.api.AddNewPlaza(this. PlazaData).subscribe(
    res => {
      console.log('add emp response::::::::::', res)
    },
    err => {
      console.log('add emp error::::::', err)
    }

  )
}
// updatePlaza(form: NgForm){
//   console.log('update data::::::', this.selectedEmp);
  // this.api.AddNewEmp(this.empData).subscribe(
  //   res => {
  //     console.log('add emp response::::::::::', res)
  //   },
  //   err => {
  //     console.log('add emp error::::::', err)
  //   }

  // )
//}








}