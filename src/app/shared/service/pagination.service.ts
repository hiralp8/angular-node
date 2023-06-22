import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  apiUrl: string = `https://reqres.in/api/users?page=`;
  constructor(private http: HttpClient) {}

  getPaginateData(page: number) {
    return this.http.get(this.apiUrl + page);
  }
}
