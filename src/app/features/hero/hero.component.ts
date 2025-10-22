import { Component, inject } from '@angular/core';
import { Loader } from '../../shared/loader/loader.component';
import { Welcome } from './elements/welcome.component';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  imports: [Loader, Welcome],
  styleUrl: './hero.component.css',
})
export class Hero {
  theme = inject(ThemeService);

  readonly isMobile = /Mobi|Android|iPhone|iPad|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
