import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponentComponent } from '../dialog-example-component/dialog-example-component.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet, MatDialogModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent {
  constructor(public dialog: MatDialog, public dialogRef:MatDialog) {}
  openDialog() {
    this.dialog.open(DialogExampleComponentComponent);
  }
  }
