import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService<T> {

  protected http: HttpClient = inject(HttpClient);
  private basePath: string = 'http://localhost:3000';
  protected httpOptions: {} = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  protected resourceEndpoint: string = '';

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  protected resourcePath(): string {
    return `${this.basePath}/${this.resourceEndpoint}`;
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
