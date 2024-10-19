import { Bloc } from './bloc';
import { Reservation } from './reservation';

export class Chambre {
  idChambre: number;
  numeroChambre: string;
  typeC: string;
  bloc?: Bloc;            // Optional reference to a Foyer
  reservation?: Reservation[]; // Optional list of Reservations

  constructor(
    idChambre: number,
    numeroChambre: string,
    typeC: string,
    bloc?: Bloc,
    reservation?: Reservation[]
  ) {
    this.idChambre = idChambre;
    this.numeroChambre = numeroChambre;
    this.typeC = typeC;
    this.bloc = bloc;
    this.reservation = reservation;
  }
}
