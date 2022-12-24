import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url:string = "https://localhost:7196/api/producto/";
  constructor(
    private _http:HttpClient
  ) { }

  getAll():Observable<Producto[]>
  {
    return this._http.get<Producto[]>(this.url);
  }
  getById(id:number):Observable<Producto>{
    return this._http.get<Producto>(`${this.url}${id}`);
  }
  create(request:Producto):Observable<Producto> {
    return this._http.post<Producto>(this.url,request);
  }

  update(request:Producto): Observable<Producto> {
    return this._http.put<Producto>(this.url,request);
  }
  delete(id:number):Observable<number> {
    return this._http.get<number>(`${this.url}${id}`);
  }






}
