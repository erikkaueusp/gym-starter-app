import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */
 @Component({
  selector: 'app-snack-bar-materials',
  templateUrl: './snack-bar-materials.component.html',
  styleUrls: ['./snack-bar-materials.component.css']
})
export class SnackBarMaterialsComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
