import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicio/usuario.service'
import { PersonaService } from '../servicio/persona.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
persona : any;

constructor(public usuarioService: UsuarioService,public personaService: PersonaService, public alert: AlertController, public router: Router) {}
logout(){
  this.personaService.logout()
  this.personaService.adminot()
  this.router.navigate(['/'])
} 
}