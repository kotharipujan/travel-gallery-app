import { Component, OnInit, } from '@angular/core';
import { GetTravelDestinationService } from '../get-travel-destination.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
@Component({
  selector: 'app-travel-gallery',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule], // Add CommonModule to imports to use *ngIf and *ngFor
  templateUrl: './travel-gallery.component.html',
  styleUrls: ['./travel-gallery.component.scss']
})
export class TravelGalleryComponent implements OnInit {
  destinations: any[] = []; // Update to make it explicitly an array of any type
  loading=true
  errorMsg=""
  constructor(private getTravelDestinationService: GetTravelDestinationService) {}

  ngOnInit(): void {
    // Fetching data from the service when the component initializes
    this.getTravelDestinationService.getTravelDestinations().subscribe({
      next: (data) => {
        console.log(data)
        this.destinations = data;
        
        
      },
      error: (error) => {
        this.loading = false;
        this.errorMsg="Unable to load destinations. Please try again later.";
        console.error("Error fetching data from destination:", error);
      },
      complete: () => {
        this.loading=false
        console.log("Data fetching complete.");
      }
    });
    
  }
}
