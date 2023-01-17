import { Component, OnInit } from '@angular/core';
import { MobileLegendsService } from 'src/app/mobile-legends.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayNuevo:Array<any> = []

  mostrar(){}

  constructor(private ServHero: MobileLegendsService ) { }

  ngOnInit(): void {
    this.arrayNuevo = this.ServHero.mostrarHeroes()
    console.log(this.arrayNuevo);
  }

}
