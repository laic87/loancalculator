import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  requestLoan(payload: object): Observable<any> {

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "swb-222222"
    })

    return this.http.post<any>("/api", payload, { headers: headers })
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
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
