import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
  return this.http.get('./assets/data/data.json');
 }

  obtenerPersonaApi():Observable<any> {
  let datos=this.http.get("http://localhost:8080/getPersona/1")
  // console.log(datos)
  return datos;
}

  obtenerDomicilioApi():Observable<any> {
    
  let datos=this.http.get("http://localhost:8080/getDomicilio/1")
  // console.log(datos)
  return datos;
}

  listarEduApi():Observable<any> {
  
  let datos=this.http.get("http://localhost:8080/listarEducacion")
  // console.log(datos)
  return datos;
}

  ObtenerProyectosApi():Observable<any> {
  
  let datos=this.http.get("http://localhost:8080/listarProyectos")
  // console.log(datos)
  return datos;
}

  listarExpApi():Observable<any> {
  
  let datos=this.http.get("http://localhost:8080/listarExperiencias")
  // console.log(datos)
  return datos;
}

  listarSkillsApi():Observable<any> {
  
  let datos=this.http.get("http://localhost:8080/listarSkill")
  // console.log(datos)
  return datos;
}

}


