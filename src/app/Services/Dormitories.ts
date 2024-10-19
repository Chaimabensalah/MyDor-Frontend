import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from '../Models/chambre';

@Injectable({
  providedIn: 'root',
})
export class DormitoriesService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getRoomsByFoyer(idFoyer: number): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/rooms/foyer/${idFoyer}`);
  }

  addRoomToFoyer(room: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/rooms`, room);
  }
}
