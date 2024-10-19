import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-addfoyerdialog',
  standalone: true,
  imports:  [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './addfoyerdialog.component.html',
  styleUrl: './addfoyerdialog.component.css'
})
export class AddfoyerdialogComponent {
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AddfoyerdialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
