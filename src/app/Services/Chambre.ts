import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from '../Models/chambre';

@Injectable({
  providedIn: 'root' // This ensures the service is available globally
})
export class ChambreService {
  private apiUrl = 'http://localhost:8080/Chambre'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  addRoom(room: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}`, room);
  }

  updateRoom(room: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}${room.idChambre}`, room);
  }

  // Other service methods...
}
