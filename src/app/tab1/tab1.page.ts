import { Route } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../servicio/persona.service'
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from '../servicio/usuario.service';
import { LoginPage } from '../login/login.page'
import { Plugins } from "@capacitor/core";

const {Geolocation} = Plugins


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 
  currentCenter:any;
  coordinates:any[]=[];
  defaultZoom =14;
  @Input() usuarios:any
    persona : any;
    usuario:any
    per:any
    rep:boolean
    aepellidos:null
    email:null
    password:null
    admin={
      nombre:null,
      aepellidos:null,
      email:null,
      password:null,
    }
    viaje={
      inicio:null,
      destino:null,
      email:null
    }
    reporte={
      local:null,
      descripcion:null,
      email:null
    }
//lat = 51.678418;
//lng = 7.809007;
    

  constructor(public personaService: PersonaService,public alertController: AlertController,public usuarioService: UsuarioService, public alert: AlertController, public router: Router) {
    this.per=usuarioService.valor
    this.admin.nombre = ""
    this.rep=false;
  } 
  ngOnInit() {
    //this.obtenerUsuarios();
    this.valores();
    this.seleccionar();
    //this.getCurrentPosition();
    //this.watchPosition();
    
  }
  valores(){
    console.log("desde",this.admin)
  }
   registrarViaje(){
    this.viaje.email=this.per
    console.log(this.viaje); 
    this.usuarioService.registrarViaje(this.viaje).then((data: any) =>{
      this.alerta()
    }).catch((err) =>{
      //console.log(err);
        })
  }
  registrarAlerta(){
    this.reporte.email=this.per
    this.reporte.local="laitud: "+this.currentCenter.lat+" , Longitud: "+this.currentCenter.long
    console.log(this.viaje); 
    this.usuarioService.registrarAlerta(this.reporte).then((data: any) =>{
      this.alerta2()
    }).catch((err) =>{
      //console.log(err); 
        })
  }
  async alerta(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Entendido',
      message: 'Peticion de viaje',
      buttons: ['OK']
    });
    await alert.present();
  }
  async alerta2(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Entendido',
      message: 'Alerta enviada !!!',
      buttons: ['OK']
    });
    await alert.present();
  }
  
   ionViewDidEnter(){
   this.watchPosition();
    this.getCurrentPosition();
  }
  
  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
      console.log("Codigo",this.usuarios);
      console.log();
    }).catch((err) =>{
      console.log(err);
    })
  }
  seleccionar(){​​
    this.usuarioService.seleccionar(this.per).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​

    console.log(err);

    }​​);

  }​​ 
  logout(){
    this.personaService.logout()
    this.personaService.adminot()
    this.router.navigate(['/'])
  }
  report(){
    this.rep=true;
  }
  report2(){
    this.rep=false;
  }
  
  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      long: coordinates.coords.longitude
    }
  }
  
  watchPosition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      this.coordinates.push ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  }
}
