import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileLegendsService {
  heroes = [
    {
      name:'Hayabusa',
      id:1,
      line:'Jungla',
      rol:'Asesino',
      img:"https://rare-gallery.com/uploads/posts/305409-Hayabusa-Shadow-of-Obscurity-Skin-Mobile-Legends-4K.jpg",
    },
    {
      name:'Pharsa',
      id:2,
      line:'Linea de Medio',
      rol:'Mago',
      img:"https://rare-gallery.com/thumbs/342011-Pharsa-Empress-Phoenix-Skin-Mobile-Legends-Bang-Bang-ML-MLBB-Video-Game.jpg",
    },
    {
      name:'Mobile',
      id:3,
      line:'Linea de Experiencia',
      rol:'Combatiente',
      img:"https://rare-gallery.com/thumbs/956296-Mobile-Legends-Martis-Capricorn-anime-video-games.jpg",
    },
    {
      name:'Claude',
      id:4,
      line:'Linea de Oro',
      rol:'Tirador',
      img:"https://rare-gallery.com/thumbs/341990-Claude-Mecha-Dragon-Skin-Mobile-Legends-Bang-Bang-ML-MLBB-Video-Game.jpg",
    },
    {
      name:'Akai',
      id:5,
      line:'Linea de Oro',
      rol:'Apoyo',
      img:"https://rare-gallery.com/thumbs/343477-Akai-Magistrate-Skin-Mobile-Legends-Bang-Bang-ML-MLBB-Video-Game.jpg",
    },
  ]
  mostrarHeroes() {
    return this.heroes;
  }
  mostrarporRol(roles:string){
    return this.heroes.find( heroe => heroe.rol === roles)
  }
  // agregarHeroes(obj:any){
  //   this.heroes.push(obj)
  // }
  constructor() { 

  }
}
