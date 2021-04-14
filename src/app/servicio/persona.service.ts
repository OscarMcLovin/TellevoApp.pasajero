import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class PersonaService {
  personas: Array<any>
  activar:boolean
  loeo:boolean
  admin:boolean
  fun:boolean
  persona={
    nombre:null,
    contra:null,
    email:null,
    notas:null,
    sexo:null
  }
  administrador={
    usuario:"admin",
    contraseña:"3526"
  }

  constructor() {
    this.personas=[]
    this.activar=false
    this.loeo=false
    this.admin=true
   }

   add(){
    let newPersona = {
      nombre : this.persona.nombre,
      notas : this.persona.notas,
      contra : this.persona.contra,
      email : this.persona.email,
      sexo: this.persona.sexo
    }
    this.personas.push(newPersona)
    console.log(this.personas)
    this.activar = true
    this.fun = true
   }

   borrar(){
     this.personas.pop()
   }

   act(){
     this.activar = true
   }
   login(){
     this.loeo = true
   }
   logout(){
     this.loeo = false
   }
   admia(){
     this.admin = true
   }
   adminot(){
     this.admin = false
   }
}