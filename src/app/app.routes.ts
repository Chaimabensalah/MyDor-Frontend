import { Routes } from '@angular/router';
import { AddDormitoriesDialogComponent } from './add-dormitories-dialog/add-dormitories-dialog.component';
import { BlocsComponent } from './blocs/blocs.component';
import { BlocComponent } from './Components/bloc/bloc.component';
import { FoyerComponent } from './Components/foyer/foyer.component';
import { RoomComponent } from './Components/room/room.component';
import { ConfirmerReservationRoomComponent } from './confirmer-reservation-room/confirmer-reservation-room.component';
import { DialogExampleComponentComponent } from './dialog-example-component/dialog-example-component.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DormitoriesComponent } from './dormitories/dormitories.component';
import { AddfoyerdialogComponent } from './admin/addfoyerdialog/addfoyerdialog.component';
import { ViewfoyerComponent } from './admin/viewfoyer/viewfoyer.component';
import { AddfoyerComponent } from './admin/addfoyer/addfoyer.component';
import { AdminroomlistComponent } from './admin/adminroomlist/adminroomlist.component';
import { EditfoyerdetailsdialogComponent } from './admin/editfoyerdetailsdialog/editfoyerdetailsdialog.component';
import { AddblocdialogComponent } from './admin/addblocdialog/addblocdialog.component';
import { BloclistComponent } from './admin/bloclist/bloclist.component';

export const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'foyer', component:FoyerComponent},
  {path: 'bloc', component:BlocComponent},
  {path: 'forms', component:FormsComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'profil', component:ProfilComponent},
  {path: 'home', component:HomeComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'room', component:RoomComponent},
  {path: 'dormitories', component:DormitoriesComponent},
  {path: 'roomlist', component:RoomListComponent},
  {path: 'DialogExampleComponent', component:DialogExampleComponentComponent},
  {path: 'addDormitories', component:AddDormitoriesDialogComponent},
  {path: 'blocs', component:BlocsComponent},
  {path: 'rooms', component:RoomsComponent},
  {path: 'confirmerReservationRoom', component:ConfirmerReservationRoomComponent},
  {path: 'addfoyergialog', component:AddfoyerdialogComponent},
  {path: 'viewfoyer', component:ViewfoyerComponent},
  {path: 'addfoyer', component:AddfoyerComponent},
  {path: 'adminroomlist', component:AdminroomlistComponent},
  {path: 'editfoyerdetailsdialog', component:EditfoyerdetailsdialogComponent},
  {path: 'addblocdialog', component:AddblocdialogComponent},
  {path: 'bloclist', component:BloclistComponent},































];
