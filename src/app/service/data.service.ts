import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }
private apiUrl = 'https://jsonplaceholder.typicode.com/';



  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }
  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos/${id}`);
  }

}
