import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addfoyer',
  standalone: true,
  imports: [],
  templateUrl: './addfoyer.component.html',
  styleUrl: './addfoyer.component.css'
})
export class AddfoyerComponent {
  constructor(public dialog: MatDialog, public dialogRef:MatDialog,private fb: FormBuilder, ) {}

  openDialog() {
    this.dialog.open(AddfoyerComponent);
  }
}
