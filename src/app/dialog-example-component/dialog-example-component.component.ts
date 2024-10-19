import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Chambre } from '../Models/chambre';
import { ChambreService } from '../Services/Chambre';

@Component({
  selector: 'app-dialog-example-component',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, HttpClientModule,ReactiveFormsModule], // Add HttpClientModule here
  templateUrl: './dialog-example-component.component.html',
  styleUrls: ['./dialog-example-component.component.css']
})
export class DialogExampleComponentComponent {
  roomForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogExampleComponentComponent>,
    private fb: FormBuilder,
    private chambreService: ChambreService,
    @Inject(MAT_DIALOG_DATA) public data: Chambre // Inject data if updating
  ) {
    this.roomForm = this.fb.group({
      idChambre: [data?.idChambre || null], // Hidden field or optional if updating
      numeroChambre: [data?.numeroChambre || '', Validators.required],
      typeC: [data?.typeC || '', Validators.required],
      bloc: [data?.bloc || null], // Optional block field if applicable
      reservation: [data?.reservation || []] // Optional reservation field
    });
  }

  // Submit Room Form
  submitRoom() {
    if (this.roomForm.valid) {
      const room: Chambre = this.roomForm.value;
      if (room.idChambre) {
        // Update existing room
        this.chambreService.updateRoom(room).subscribe(response => {
          this.dialogRef.close(response); // Close dialog with response
        }, error => {
          console.error('Update failed:', error);
        });
      } else {
        // Add new room
        this.chambreService.addRoom(room).subscribe(response => {
          this.dialogRef.close(response); // Close dialog with response
        }, error => {
          console.error('Add failed:', error);
        });
      }
    } else {
      console.error('Form is invalid:', this.roomForm.errors);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
