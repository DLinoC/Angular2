import { Component, OnInit } from '@angular/core';
import { MobileLegendsService } from 'src/app/mobile-legends.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  nombre !: any
  roles !: string

  constructor(private ServRol: MobileLegendsService ) { }

  buscarHero(rol:string){
    this.nombre = this.ServRol.mostrarporRol(rol)
  }
}
