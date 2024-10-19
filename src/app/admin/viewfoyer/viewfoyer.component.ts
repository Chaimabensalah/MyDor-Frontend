import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AddfoyerComponent } from '../addfoyer/addfoyer.component';
import { AddfoyerdialogComponent } from '../addfoyerdialog/addfoyerdialog.component';
import { EditfoyerdetailsdialogComponent } from '../editfoyerdetailsdialog/editfoyerdetailsdialog.component';
import { AddblocdialogComponent } from '../addblocdialog/addblocdialog.component';
@Component({
  selector: 'app-viewfoyer',
  standalone: true,
  imports: [MatCardModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './viewfoyer.component.html',
  styleUrl: './viewfoyer.component.css'
})
export class ViewfoyerComponent {
  constructor(public dialog: MatDialog, public dialogRef:MatDialog,private fb: FormBuilder, ) {}


  openDialog1() {
    this.dialog.open(AddfoyerdialogComponent);
  }
  openDialog2() {
    this.dialog.open(EditfoyerdetailsdialogComponent);
  }
  openDialog3() {
    this.dialog.open(AddblocdialogComponent);
  }
}
