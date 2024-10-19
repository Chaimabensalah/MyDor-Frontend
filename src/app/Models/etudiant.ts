import { Reservation } from './reservation';

export class Etudiant {
  idEtudiant: number;
  nomEt: string;
  prenomEt: string;
  cin: string;
  ecole: string;
  dateNaissance: Date;
  reservation?: Reservation[]; // Optional list of Reservations

  constructor(
    idEtudiant: number,
    nomEt: string,
    prenomEt: string,
    cin: string,
    ecole: string,
    dateNaissance: Date,
    reservation: Reservation[]
  ) {
    this.idEtudiant = idEtudiant;
    this.nomEt = nomEt;
    this.prenomEt = prenomEt;
    this.cin = cin;
    this.ecole = ecole;
    this.dateNaissance = dateNaissance;
    this.reservation = reservation;
  }
}
