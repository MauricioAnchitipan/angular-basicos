/*
Usualmente el nombre de un modulo es igual al de la carpeta principal.
El objetivo de los modulos es ayudarnos a agrupar componentes y piezas de nuestra aplicacion que tienen sentido entre si. Los modulos cumplen varios objetivos:
-Encapsular las cosas.
-Ayudarnos con la carga perezosa (lazy load) la cual es cargar cosas solo si son requeridas o demandadas.

No olvidar importar este modulo HeroesModule en el modulo principal (archivo app.module.ts). Al hacer esto cabe mencionar que se borro lo que habia antes en este modulo principal:
-import { HeroeComponent } from './heroes/heroe/heroe.component';
-import { ListadoComponent } from './heroes/listado/listado.component';
-En el @NgModule se borro HeroeComponent y ListadoComponent porque aqui ya se los declara 
*/

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //las declaraciones dicen que componentes tiene este modulo
		HeroeComponent,
     	ListadoComponent
    ],
	exports: [ //aqui digo que cosas quiero que sean visibles afuera de este modulo
		ListadoComponent
	],
	imports: [ //aqui van solo modulos a importarse
		CommonModule //este modulo permite usar directivas como *ngIf, *ngFor en el archivo listado.component.html
	]
})
export class HeroesModule { } //se exporta el modulo (notar que es un clase puesto que en Angular todo es tratado como clase)