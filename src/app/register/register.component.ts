import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../all.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:FormGroup;
  constructor(private fb:FormBuilder, private _ser:AllService,private _r:Router) {
    this.register = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(100)]],
      mobile:[''],
      email:[''],
      password:['']
    })
   }

  save(data:any){
    if(data['email']!="" &&  data['password']!=""){
    this._ser.register(data).subscribe((res)=>{
      if(res['code']){
        this._ser.setMessage("Register successful , please login","success");
        this._r.navigate(['/login'])
      }else{
        this._ser.setMessage("Register failed , please retry","danger");
      }

    })
    }else{
      this._ser.setMessage("Register form empty , please fill data","danger");
    }
  }

  ngOnInit(): void {
  }

}
