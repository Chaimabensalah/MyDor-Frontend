import { Component } from '@angular/core';
import { Foyer } from '../Models/foyer';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddDormitoriesDialogComponent } from '../add-dormitories-dialog/add-dormitories-dialog.component';

@Component({
  selector: 'app-dormitories',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet, MatDialogModule,ReactiveFormsModule,RouterLink],
  templateUrl: './dormitories.component.html',
  styleUrl: './dormitories.component.css'
})
export class DormitoriesComponent {
  dormitories: Foyer[] = [
    // Sample dormitories for display; fetch from backend later
    { idFoyer: 1, nomFoyer: 'Elmwood Hall', capaciteFoyer: 120, bloc: [] },
    { idFoyer: 2, nomFoyer: 'Orion House', capaciteFoyer: 312, bloc: [] },
  ];
  constructor(public dialog: MatDialog, public dialogRef:MatDialog,private fb: FormBuilder, ) {}

  openDialog() {
    this.dialog.open(AddDormitoriesDialogComponent);
  }

}
