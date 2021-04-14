import { Component } from '@angular/core';
import { PersonaService } from '../servicio/persona.service'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public personaService: PersonaService) {}
 
}
