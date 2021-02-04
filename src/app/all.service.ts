import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post('http://localhost/12_clinet_api/register.php',data);
  }

  login(data:any){
    return this.http.post('http://localhost/12_clinet_api/login.php',data);
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
}
