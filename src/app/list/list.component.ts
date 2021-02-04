import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _ser: AllService) { }
  userList:any;
  ngOnInit(): void {
    this._ser.list().subscribe((res)=>{
      this.userList = res;
    })
  }

  delete(id){
    this._ser.delete(id).subscribe((res)=>{
      console.log("Record deleted");
      this._ser.list().subscribe((res)=>{
        this.userList = res;
      })
    })
  }



}
