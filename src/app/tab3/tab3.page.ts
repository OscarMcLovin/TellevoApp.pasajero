import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../servicio/persona.service';
import { UsuarioService } from '../servicio/usuario.service';
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userImage = "assets/img/perfil.jpg";
  @Input() viajes: any
  photo: SafeResourceUrl;
  per:any
  viaj:boolean
  admin={
    nombre:null,
    aepellidos:null,
    email:null,
    password:null,
    curp:null,
    direccion:null
  }
 
  constructor(public sanitizer: DomSanitizer,public personaService: PersonaService,public usuarioService: UsuarioService, public router: Router) {
    this.per=usuarioService.valor
    this.admin.nombre = ""
    this.viaj=false
  }
  ngOnInit() {
    this.seleccionar();
    this.seleccionarViaje()
  }
  logout(){
    this.personaService.logout()
    this.personaService.adminot()
    this.router.navigate(['/'])
  } 
  seleccionar(){​​
    this.usuarioService.seleccionar(this.per).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​
    console.log(err);
    }​​);
  }​​
  seleccionarViaje(){​​
    console.log(this.admin.email);
    this.usuarioService.seleccionarViaje(this.per).then((data: any) => {​​
    this.viajes = data.productos;
    console.log("Seleccion12",this.viajes);
    }​​).catch((err) => {​​
    console.log(err);
    }​​);
  }​​

  async takePhoto(){
    const image = await Plugins.Camera.getPhoto({
      quality:100,
      allowEditing:false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl)
    console.log(image);
  }
  viajon(){
    this.viaj=true
  }
  viajoof(){
    this.viaj=false
  }
}
