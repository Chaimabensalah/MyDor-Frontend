import { Chambre } from "./chambre";
import { Foyer } from "./foyer";

export class Bloc {
  idBloc? : number;
  nomBloc?  : string;
  CapaciteBloc? : number;
  foyer? : Foyer;
  chambre? : Chambre[];
}
