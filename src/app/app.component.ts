import { Component } from '@angular/core';
import { TravelGalleryComponent } from './travel-gallery/travel-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TravelGalleryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-gallery';
}