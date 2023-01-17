import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileLegendsService {
  heroes = [
    {
      name:'Hayabusa',
      id:'1',
      line:'jungla',
      rol:'asesino',
    },
    {
      name:'Kadita',
      id:'2',
      line:'linea de medio',
      rol:'mago',
    },
    {
      name:'Lapu Lapu',
      id:'3',
      line:'linea de experiencia',
      rol:'combatiente'
    },
    {
      name:'Karrie',
      id:'4',
      line:'linea de oro',
      rol:'tirador',
    },
    {
      name:'Kaja',
      id:'5',
      line:'linea de oro',
      rol:'Support',
    },
  ]
  mostrarHeroes() {
    return this.heroes;
  }
  agregarHeroes(obj:any){
    this.heroes.push(obj)
  }
  constructor() { 

  }
}
