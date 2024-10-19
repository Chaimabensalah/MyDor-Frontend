import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf,NgSwitch,CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
mylist =["chambre","bloc","foyer"];
activee= "chambre";

hero={
name:'',
power:0,
image:''
}

heros: any[]=[];

add(){
  this.heros.push(this.hero);
  this.hero={
    name:'',
    power:0,
    image:''
  }
}


}
