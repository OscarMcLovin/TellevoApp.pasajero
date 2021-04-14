import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PersonaService } from '../servicio/persona.service'
import { UsuarioService } from '../servicio/usuario.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() usuarios: any 
  @Input() admin: any 
  @Input() valor: any 
  usuario: string;
  regis:String;
  _id:string;
  usuari:Array<any>
  password: string;
  persona: any;
  usua:any;
  log:boolean;
  val:any
  person={
    nombre:null,
    aepellidos:null,
    email:null,
    password:null,
  }
  

  constructor(public personaService: PersonaService,public usuarioService: UsuarioService, public alert: AlertController, public router: Router,public alertController: AlertController) { 
    this.log=false;
    this.regis="0";
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
  seleccionar(idUsuario: string){​​
    this.usuarioService.seleccionar(idUsuario).then((data: any) => {​​
    this.admin = data.usuarios;
    console.log("Seleccion",this.admin);
    }​​).catch((err) => {​​

    console.log(err);

    }​​);

  }​​
  registrarUsuario(){
    console.log(this.person); 
    this.usuarioService.registrarUsuario(this.person).then((data: any) =>{
      location.reload(true);
    }).catch((err) =>{
      //console.log(err);
        })
  }
  ngOnInit() {
    this.obtenerUsuarios();
  }
  async agregarAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      subHeader: 'Se añadio el usuario',
      buttons: ['OK']
    });
  await alert.present();
}
  public value(){
    console.log(this.valor); 
    this.usuarioService.value(this.valor),((data: any) =>{
    })
  }

  async login(){
    for(let x = 0; x < this.usuarios.length; x++){
      if(this.usuario == this.usuarios[x].email && this.password == this.usuarios[x].password){
        console.log(this.usuarios.email);
        console.log(this.usuario);
        //Las credenciales son correctas
        this.personaService.admia()
        this.valor=x;
      this.log=true
      this.usuarioService.value(this.usuarios[x].email),((data: any) =>{
      })
      
      }
    }
  

    if(this.log == true){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Exito',
        message: 'LAS CREDENCIALES SON CORRECTAS',
        buttons: ['OK']
      });
      await alert.present();
      this.personaService.login
       this.router.navigate(['/tabs/tab1'])  
       
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: 'LAS CREDENCIALES SON INCORRECTAS',
        buttons: ['OK']
      });
      await alert.present();
    }
    this.log=false;
  }
  
  
  logout(){
    this.personaService.logout()
   if(this.personaService.loeo == false){
    this.router.navigate(['/'])
    this.personaService.adminot()
   } 
  }

  regon(){
    this.regis="1";
  }
  regoff(){
    this.regis="2";
  }

}
