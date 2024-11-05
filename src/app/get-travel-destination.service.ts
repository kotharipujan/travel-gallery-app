import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient from HttpClientModule
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class GetTravelDestinationService {
  private apiUrl = 'https://y4x53fu036.execute-api.us-east-2.amazonaws.com/Prod';

  constructor(private http: HttpClient) {} // Inject HttpClient here

  getTravelDestinations(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Make GET request
  }
}
