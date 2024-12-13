import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, EncabezadoComponent, DirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'aam-ejercicio14';
}
