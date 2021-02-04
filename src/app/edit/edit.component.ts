import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edit:FormGroup;
  constructor(private fb:FormBuilder, private _ser:AllService, private _ar:ActivatedRoute) {
    this.edit = this.fb.group({
      id:[],
      name:['Gopal',[Validators.required,Validators.maxLength(100)]],
      mobile:[''],
      email:[''],
      password:[''],
      status:[]
    })
   }

  update(data:any){
    this._ser.update(data).subscribe((res)=>{
      console.log(res);

    })
  }


  ngOnInit(): void {

    this._ar.params.subscribe(
      
      
      (kalyani)=>{
      this._ser.get(kalyani.gopal).subscribe((res)=>{
        this.edit.patchValue(res)
        //this.edit.controls['contact'].patchValue(res['mobile'])
        console.log(res)
      }
      
      
      
      ) 
    })
   

  }

}
