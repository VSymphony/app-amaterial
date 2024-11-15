import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ejemplo-amaterial',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './ejemplo-amaterial.component.html',
  styleUrl: './ejemplo-amaterial.component.css'
})
export class EjemploAmaterialComponent {

}
