import { Component, OnInit } from '@angular/core';
import { GetTravelDestinationService } from '../get-travel-destination.service';
import { CommonModule } from '@angular/common'; // Importing CommonModule for *ngIf and *ngFor
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//interface to define the contents of destinations array
interface TravelDestination {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-travel-gallery',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule], // Adding necessary Angular modules 
  templateUrl: './travel-gallery.component.html',
  styleUrls: ['./travel-gallery.component.scss']
})
export class TravelGalleryComponent implements OnInit {
  // Array to store fetched travel destinations
  destinations: TravelDestination[] = []; 

  // Flags to manage loading state and error messages
  loading: boolean = true; 
  errorMsg: string = ""; 

  // Injecting the service to handle fetching travel destinations from API
  constructor(private getTravelDestinationService: GetTravelDestinationService) {}

  // Lifecycle hook that runs after component initialization
  // Here, we're using it to initiate the data fetching process
  ngOnInit(): void {
    // Fetching data from the API using the service
    this.getTravelDestinationService.getTravelDestinations().subscribe({

      next: (data: TravelDestination[]) => {

        // Storing fetched data in the destinations array
        this.destinations = data;

      },
      error: (error: any) => {
        // Handling any error that occurs during data fetching
        this.loading = false;
        this.errorMsg = "Unable to load destinations. Please try again later.";
      },
      complete: () => {
        // Setting loading to false once data fetching is complete
        this.loading = false;
      }
    });
  }
}
