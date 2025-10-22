import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/hero/hero.component';
import { ThemeService } from './core/services/theme.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSun, lucideMoonStar } from '@ng-icons/lucide';
import { Bio } from './features/bio/bio.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hero, Bio, NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
  viewProviders: [provideIcons({ lucideSun, lucideMoonStar })],
})
export class App {
  theme = inject(ThemeService);

  toggleDarkMode() {
    this.theme.toggleDarkMode();
  }
}
