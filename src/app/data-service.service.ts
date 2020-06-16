import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private getLista = 'https://apis.datos.gob.ar/georef/api/provincias';


  constructor(private http: HttpClient) { }

  public obtenerListado(){
    return this.http.get(this.getLista);
  }
}