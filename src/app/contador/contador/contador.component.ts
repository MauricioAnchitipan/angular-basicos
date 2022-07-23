/*
Este es un componente que yo cree.
No olvidar colocar la clase ContadorComponent en el archivo app.module.ts
*/

import {Component} from '@angular/core';

@Component({
    selector: 'app-contador', //aqui puede ir un nombre cualquiera, pero se coloca app-... para indicar que es personalizado (algo que yo hice) pero usualmente es el nombre de su clase sin el Component, en este caso, ContadorComponent 
    template: `
        <h1> {{titulo}}</h1>
        <h3> La base es: <strong>{{base}}</strong></h3>

        <button (click) = 'sumar()'>+ 1</button> <!-- clic es un evento del boton. Se invoca a la funcion sumar -->
        <span>{{numero}}</span>
        <button (click) = 'restar()'>- 1</button> <!-- en lugar de la funcion tambien pude colocar numero = numero - 1 -->

        <!-- otra forma de hacer un contador-->
        <button (click) = 'acumular(base)'>+{{base}}</button>
        <span>{{numero}}</span>
        <button (click) = 'acumular(-base)'>-{{base}}</button>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador App'; //el public puede ir o no, pero se acostumbra ponerlo ya que la mayoria lo hace
    numero: number = 10;
    base: number = 5;

    sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }

    acumular(valor: number) {
        this.numero += valor;
    }

}