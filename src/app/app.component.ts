import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TravelGalleryComponent} from './travel-gallery/travel-gallery.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TravelGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-gallery';
}
