import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _ser:AllService, private _ar:ActivatedRoute) { }

  data:any;
  ngOnInit(): void {
    this._ar.params.subscribe((params)=>{
      this._ser.get(params.num).subscribe((res)=>{
        this.data=res;
      }) 
    })
   
  }

}
