import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main class="container mx-auto">
      <div class="flex gap-4">
        <a routerLink="" class="link">Home</a>
        <a routerLink="confirmation" class="link">Go To Confirmation</a>
      </div>
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
