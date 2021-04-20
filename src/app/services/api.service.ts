import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string;

  constructor(private http: HttpClient) { 
    this.apiKey = environment.API_KEY;
  }

  requestLoan(payload: object): Observable<any> {


    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": this.apiKey
    })

    return this.http.post<any>("/api", payload, { headers: headers })
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      //errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      if(err.status ===  400) {
        return throwError(err.error.fields);
      }
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
