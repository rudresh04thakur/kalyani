import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AllService } from '../all.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:FormGroup;
  constructor(private fb:FormBuilder, private _ser:AllService) {
    this.register = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(100)]],
      mobile:[''],
      email:[''],
      password:['']
    })
   }

  save(data:any){
    this._ser.register(data).subscribe((res)=>{
      console.log(res);

    })
  }

  ngOnInit(): void {
  }

}
