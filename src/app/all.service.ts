import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  redirectUrl:any;

  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post('http://localhost/12_clinet_api/register.php',data);
  }

  login(data:any){
    return this.http.post('http://localhost/12_clinet_api/login.php',data).pipe(map((res)=>{
      //this.isLogin();
      return res;
    }));
  }

  
  list(){
    return this.http.post('http://localhost/12_clinet_api/list.php',null);
  }

  delete(id){
    return this.http.get('http://localhost/12_clinet_api/delete.php?id='+id);
  }

  get(id){
    return this.http.get('http://localhost/12_clinet_api/get.php?id='+id);
  }


  update(data:any){
    return this.http.post('http://localhost/12_clinet_api/update.php',data);
  }

  setToken(token){
    localStorage.setItem('token',token)
  }

  isLogin(){
    const usertoken = localStorage.getItem('token'); 
    if(usertoken != null){
      return true;
    }else{
      return false;
    }
  }
}
