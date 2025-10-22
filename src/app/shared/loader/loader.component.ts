import { Component, inject, input } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLoaderPinwheel } from '@ng-icons/lucide';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideLoaderPinwheel })],
})
export class Loader {
  readonly type = input<string>();
  theme = inject(ThemeService);
}
