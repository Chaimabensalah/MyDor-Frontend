import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { DialogExampleComponentComponent } from '../../dialog-example-component/dialog-example-component.component';
@Component({
  selector: 'app-room',
  standalone: true,
  imports: [MenuComponent,RouterOutlet, MatDialogModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogExampleComponentComponent);
  }
}
