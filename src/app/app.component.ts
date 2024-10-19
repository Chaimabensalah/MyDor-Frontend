import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponentComponent } from './dialog-example-component/dialog-example-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MatDialogModule],  // Use MatDialogModule, not MatDialog
})
export class AppComponent {
  [x: string]: any;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogExampleComponentComponent);
  }
}
