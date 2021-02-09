import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AllService } from '../all.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(private fb: FormBuilder, private _ser: AllService, private _r: Router) {
    this.login = this.fb.group({
      email: [''],
      password: ['']
    });

  }

  //  FormBuilder is parent of FormGroup-->group
  //  FormBuilder is use to create form Object
  //  FormGroup is use to create array of form control Object
  //  FormControl is use to create single form control Object

  loginUser(data: any) {
    this._ser.login(data).subscribe(
      (res) => {
        if (res['data']['token'] != "") {
          this._ser.setToken(res['data']['token']);
          this._ser.isLogin();
          let redirect = this._ser.redirectUrl ? this._ser.redirectUrl : '/list';
          console.log(redirect)
          this._r.navigate([redirect]);
          this._ser.setMessage("Login successful",'success');
        }else{
          this._ser.setMessage("Login token not valid",'danger');
        }
      },
      (error) => {
        this._ser.setMessage("Error in login",'danger');
      }
    )
  }

  ngOnInit(): void {
    //console.log(this._r.url)
    if(this._r.url == '/logout'){
      this._ser.logout();
      this._r.navigate(['/login'])
    }
  }

}
