/*
Asi es como Angular me crea un nuevo componente:

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit { //OnInit es un ciclo de vida. Los ciclos de vida junto con el constructor son metodos que dispara Angular de manera automatica

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void { //usualmente el ngOnInit se usa para inicializar cosas
    console.log('ngOnInit');
  }

}

Por el momento no se va a trabajar con ciclos de vida ni con constructores, por lo que se deja al componente,
de la siguiente manera:
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {  
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
