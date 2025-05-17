// src/app/app.component.ts
import { Component } from '@angular/core';
import { SeedService } from './core/services/seed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Optional
  standalone: false,
})
export class AppComponent {

  constructor(private seedService: SeedService) {}

  ngOnInit(): void {
    this.seedService.initializeLocalStorage();
  }
}


