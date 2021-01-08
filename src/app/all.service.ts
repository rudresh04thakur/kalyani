import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';
import { environment } from 'src/environments/environment';

const APIConst = {
  GET_SUB_MAJOR_HEAD_BY_ID:'apis/getsubmajorhead.php',
  GET_MINOR_HEAD_BY_SUB_MAJOR_ID:'apis/getminorhead.php',
  GET_SUB_HEAD_BY_MINOR_HEAD_ID:'apis/getsubhead.php'
}


@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  getSubMajorHead(majorHeadId:any){
    return this.http.post(`${environment.baseURL}${APIConst.GET_SUB_MAJOR_HEAD_BY_ID}`,{'id':majorHeadId});
  }

  getMinorHead(minorHeadId:any){
    return this.http.post(`${environment.baseURL}${APIConst.GET_MINOR_HEAD_BY_SUB_MAJOR_ID}`,{'id':minorHeadId});
  }

  getSubHead(subHeadId:any){
    return this.http.post(`${environment.baseURL}${APIConst.GET_SUB_HEAD_BY_MINOR_HEAD_ID}`,{'id':subHeadId});
  }
}
