import { Component, OnInit, } from '@angular/core';
import { GetTravelDestinationService } from '../get-travel-destination.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor
@Component({
  selector: 'app-travel-gallery',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports to use *ngIf and *ngFor
  templateUrl: './travel-gallery.component.html',
  styleUrls: ['./travel-gallery.component.scss']
})
export class TravelGalleryComponent implements OnInit {
  destinations: any[] = []; // Update to make it explicitly an array of any type

  constructor(private getTravelDestinationService: GetTravelDestinationService) {}

  ngOnInit(): void {
    // Fetching data from the service when the component initializes
    this.getTravelDestinationService.getTravelDestinations().subscribe({
      next: (data) => {
        console.log(data)
        this.destinations = data;
        
      },
      error: (error) => {
        console.error("Error fetching data from destination:", error);
      },
      complete: () => {
        console.log("Data fetching complete.");
      }
    });
    
  }
}
