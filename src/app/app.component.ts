import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan Calculator';
  calculatedLoan = false;
  errorMessage = "";


  /*
  calculatedLoan$ = this.apiService.calculatedLoan$
  .pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  */

  constructor(private apiService: ApiService) { }
  
  submitLoan(): void {
    this.calculatedLoan = !this.calculatedLoan;
  }

}