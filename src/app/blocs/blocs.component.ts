import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-blocs',
  standalone: true,
  imports: [MenuComponent,NavbarComponent,RouterLink],
  templateUrl: './blocs.component.html',
  styleUrl: './blocs.component.css'
})
export class BlocsComponent {

}
