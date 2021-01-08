import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AllService } from '../all.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {



  // majorhead -> submajorhead -> minorhead -> subhead

  // majorHeadjson = [
  //   {
  //     id: 608,
  //     subMajorHead: [
  //       {
  //         id: 1151, name: 'gopal',
  //         minorHead: [
  //           {
  //             id: 227, minorHeadName: 'Pranita',
  //             subHead: [
  //               { id: 123, subHeadName: 'sub head 1' },
  //               { id: 124, subHeadName: 'sub head 2' },
  //               { id: 125, subHeadName: 'sub head 3' },
  //               { id: 126, subHeadName: 'sub head 4' }
  //             ]
  //           },
  //           {
  //             id: 228, minorHeadName: 'Rajani',
  //             subHead: [
  //               { id: 123, subHeadName: 'sub head 11' },
  //               { id: 124, subHeadName: 'sub head 22' },
  //               { id: 125, subHeadName: 'sub head 33' },
  //               { id: 126, subHeadName: 'sub head 44' }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         id: 1251, name: 'Anil',
  //         minorHead: [
  //           {
  //             id: 327, minorHeadName: 'Sonu',
  //             subHead: [
  //               { id: 123, subHeadName: 'sub head 31' },
  //               { id: 124, subHeadName: 'sub head 31' },
  //               { id: 125, subHeadName: 'sub head 33' },
  //               { id: 126, subHeadName: 'sub head 34' }
  //             ]
  //           },
  //           {
  //             id: 328, minorHeadName: 'Golu',
  //             subHead: [
  //               { id: 123, subHeadName: 'sub head 41' },
  //               { id: 124, subHeadName: 'sub head 42' },
  //               { id: 125, subHeadName: 'sub head 43' },
  //               { id: 126, subHeadName: 'sub head 44' }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  // ]

  subMajorHeadOptions:any;
  minorHeadOptions:any;
  subHeadOptions:any;
  mainForm: any;
  constructor(private fb: FormBuilder, private _ser:AllService) {
    this.mainForm = this.fb.group({
      majorHead :new FormControl(),
      subMajorHead : new FormControl(),
      minorHead :new FormControl(),
      subHead : new FormControl()
    });
  }

  ngOnInit(): void {

  }

  loadMajorHead(id:any) {
    this._ser.getSubMajorHead(id).subscribe((res:any)=>{
      console.log("in load majorhead == >",res);
      this.subMajorHeadOptions = res['data'];
      alert(res['msg'])
    })
    // this.majorHeadjson.forEach((element) => {
    //   if (element['id'] == parseInt(this.mainForm.controls['majorHead'].value)) {
    //     this.subMajorHeadOptions = element['subMajorHead']
    //   }
    // })
  }

  loadMinorHead(id:any){

    this._ser.getMinorHead(id).subscribe((res:any)=>{
      this.minorHeadOptions = res;
    })

    // this.majorHeadjson.forEach((element) => {
    //   if (element['id'] == parseInt(this.mainForm.controls['majorHead'].value)) {
    //     element['subMajorHead'].forEach((ele)=>{
    //       if(ele['id']==parseInt(id)){
    //         this.minorHeadOptions = ele['minorHead'];
    //       }
    //     })
    //   }
    // })
  }

  loadSubHead(id:any){

    
    this._ser.getSubHead(id).subscribe((res:any)=>{
      this.subHeadOptions = res;
    })


    // this.majorHeadjson.forEach((element) => {
    //   if (element['id'] == parseInt(this.mainForm.controls['majorHead'].value)) {
    //     element['subMajorHead'].forEach((ele)=>{
    //       if(ele['id']==parseInt(this.mainForm.controls['subMajorHead'].value)){
    //         ele['minorHead'].forEach((e)=>{
    //           console.log(e) 
    //           if(e['id']==parseInt(id)){
    //             this.subHeadOptions = e['subHead'];
    //           }
    //         })
    //       }
    //     })
    //   }
    // })
  }

}
