import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private darkMode = signal(false);

  isDarkMode = this.darkMode.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('dark-mode');
      if (saved) this.darkMode.set(JSON.parse(saved));
      else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.darkMode.set(prefersDark);
      }
    }
  }

  toggleDarkMode() {
    this.darkMode.update((v) => {
      const newValue = !v;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('dark-mode', JSON.stringify(newValue));
      }
      return newValue;
    });
  }
}
