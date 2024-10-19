import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bloc',
  standalone: true,
  imports: [],
  templateUrl: './bloc.component.html',
  styleUrl: './bloc.component.css'
})
export class BlocComponent {
@Input("numero") nbBloc: number=0;
@Output() totalchambre= new EventEmitter<number>;
ngOnInit(){
  this.totalchambre.emit(this.totalChambreparBloc());
}

nbchambre : any={
  "1": 20,
  "2": 15,
  "3": 10
};

totalChambreparBloc():number{
const bloc=this.nbchambre[this.nbBloc]
  return bloc;
}
}
