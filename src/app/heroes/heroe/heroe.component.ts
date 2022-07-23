/*
Este es un componente que yo cree.
No olvidar colocar la clase HeroeComponent en el archivo app.module.ts

One way data binding o enlazado en una sola via tiene que ver con el hecho de modificar una propiedad
como nombre o edad en el heroe.component.ts y ver dichos cambios en el heroe.component.html y no modificar estas propiedades en
el heroe.component.html y ver reflejados dichos cambios en el heroe.component.ts. Si se realiza lo anterior, de modificar las propiedades en ambos lados,
se conoce como two way data binding y esto no es recomendable, no es una buena practica de programacion
*/

import {Component} from '@angular/core';

@Component({
    selector: 'app-heroe', //aqui puede ir un nombre cualquiera, pero se coloca app-... para indicar que es personalizado (algo que yo hice) pero usualmente es el nombre de su clase sin el Component, en este caso, HeroeComponent
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 13;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`  
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 7;
    }
}
