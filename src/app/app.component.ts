import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto04';

  constructor(private _snackBar: MatSnackBar) {
  }
  openSnackBar() {
    this._snackBar.open('Você aderiu a este pacote!' , 'fechar');
  }
}