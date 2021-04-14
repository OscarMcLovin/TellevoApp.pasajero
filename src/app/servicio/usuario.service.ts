import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  val:number
  valor:number
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  obtenerUsuarios() {
    return this.http.get(`${this.url}/usuario`).toPromise();
    }

    seleccionar(_id: string){​​
      return this.http.get(`${this.url}/usuario/${_id}`).toPromise();
    }​​
    seleccionarViaje(email: string){​​
      console.log("Servicio",email)
      return this.http.get(`${this.url}/viaje/${email}`).toPromise();
    }​​
    registrarUsuario(usuario: any) {
      console.log(usuario);
      return this.http.post(`${this.url}/usuario`, usuario).toPromise();
    }
    registrarAlerta(usuario: any) {
      console.log(usuario);
      return this.http.post(`${this.url}/alerta`, usuario).toPromise();
    }
    registrarViaje(usuario: any) {
      console.log(usuario);
      return this.http.post(`${this.url}/viaje`, usuario).toPromise();
    }
    registrarConductor(usuario: any) {
      console.log(usuario);
      return this.http.post(`${this.url}/conductor`, usuario).toPromise();
    }
    value(val:any){
      console.log("servicio",val)
      this.valor=val
    }
    prueb(){
      console.log(this.valor)
      
    }
}
