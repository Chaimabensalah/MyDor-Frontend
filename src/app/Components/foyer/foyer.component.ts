import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { BlocComponent } from '../bloc/bloc.component';

@Component({
  selector: 'app-foyer',
  standalone: true,
  imports: [BlocComponent,NgForOf],
  templateUrl: './foyer.component.html',
  styleUrl: './foyer.component.css'
})
export class FoyerComponent {
nbBloc : number=0;
nbchambretotal: number=0;

constructor() {
  console.log("constructeur");
  this.nbBloc = 3;
}
ngOnInit(){
  console.log("ngOnInit");
}
getListBloc():number[]{
  return Array(this.nbBloc).fill(0);
}
totalChambre(outputblocvalue :number){
     this.nbchambretotal+=outputblocvalue;
     console.log(this.nbchambretotal)
}

}


