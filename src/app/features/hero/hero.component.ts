import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Loader } from '../../shared/loader/loader.component';
import { Welcome } from './elements/welcome.component';
import { ThemeService } from '../../core/services/theme.service';
import { DeviceService } from '../../core/services/device.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  imports: [Loader, Welcome],
  styleUrl: './hero.component.css',
  standalone: true,
})
export class Hero {
  theme = inject(ThemeService);

  device = inject(DeviceService);

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  isScrolled = signal(false);

  ngOnInit() {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.isScrolled.set(true);
    }

    // console.log('scrolled to', window.scrollY);
  };

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}
