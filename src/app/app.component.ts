import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //este app-root hace referencia a las etiquetas <app-root></app-root> colocadas en index.html
  templateUrl: './app.component.html', //colocando solo template, se debe poner todo el codigo html aqui en medio de backticks ``. En cambio, poniendo templateUrl se debe crear otro archivo y por ello la existencia de app.component.html
  styleUrls: ['./app.component.css'] //esto sirve para los estilos
})
export class AppComponent {
  

}
