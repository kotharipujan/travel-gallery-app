import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Observable } from 'rxjs'; // Observable is used to handle asynchronous data streams
import { environment } from '@env/environment';//Import enviroment files from @env 

@Injectable({
  providedIn: 'root' 
})
export class GetTravelDestinationService {
  // URL for the API endpoint that provides travel destination data
  private apiUrl: string = environment.apiUrl

  // Injecting HttpClient to be able to perform HTTP requests
  constructor(private http: HttpClient) {}

  // Method to fetch travel destinations from the API
  // It returns an Observable of any type 
  getTravelDestinations(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Makes a GET request to the API and returns an Observable
  }
}
