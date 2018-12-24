import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})

export class CardsService {
  dataResp: any;
  constructor(private http: HttpClient){}


  getData(){
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=HTML5").pipe(
       retry(1),
       catchError(this.handleError)
     );
  }

  handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   window.alert(errorMessage);
   return throwError(errorMessage);
 }
}