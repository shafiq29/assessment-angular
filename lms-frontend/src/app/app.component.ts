// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'lms-frontend';
// }



import { Component, OnInit } from '@angular/core';
import { SeedService } from './core/services/seed.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(private seedService: SeedService) {}

  ngOnInit(): void {
    this.seedService.initializeLocalStorage();
  }
}

