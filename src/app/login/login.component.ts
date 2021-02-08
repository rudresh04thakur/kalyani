import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms' 
import { AllService } from '../all.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private fb:FormBuilder, private _ser:AllService) {
    this.login = this.fb.group({
      email:[''],
      password:['']
    })
   }

  //  FormBuilder is parent of FormGroup-->group
  //  FormBuilder is use to create form Object
  //  FormGroup is use to create array of form control Object
  //  FormControl is use to create single form control Object

  loginUser(data:any){
    this._ser.login(data).subscribe((res)=>{
      this._ser.setToken(res['token']);
      this._ser.isLogin();
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
