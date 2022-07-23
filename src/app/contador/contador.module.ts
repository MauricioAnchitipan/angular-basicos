/*
No olvidar importar este modulo ContadorModule en el modulo principal (archivo app.module.ts). Al hacer esto cabe mencionar que se borro lo que habia antes en este modulo principal:
-import { ContadorComponent } from './contador/contador/contador.component'; //se importa el contador.component.ts que yo cree
-En el @NgModule se borro ContadorComponent porque aqui ya se lo declara 
*/

import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [ 
        ContadorComponent
    ],
	exports: [ 
		ContadorComponent
	],
	imports: [ 

	]
})
export class ContadorModule { }