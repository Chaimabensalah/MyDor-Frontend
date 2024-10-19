import { Etudiant } from './etudiant'; // Import the Etudiant model

export class Reservation {
  idReservation: number;
  anneeUniversitaire: Date;
  estValide: boolean;
  etudiant: Etudiant[]; // Many-to-Many relationship with students

  constructor(
    idReservation: number,
    anneeUniversitaire: Date,
    estValide: boolean,
    etudiant: Etudiant[]
  ) {
    this.idReservation = idReservation;
    this.anneeUniversitaire = anneeUniversitaire;
    this.estValide = estValide;
    this.etudiant = etudiant;
  }
}
