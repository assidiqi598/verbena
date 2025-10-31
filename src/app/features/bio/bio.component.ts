import { Component, inject } from '@angular/core';
import { Definition } from './elements/definition.component';
import { Loader } from '../../shared/loader/loader.component';
import { NgOptimizedImage } from '@angular/common';
import { DeviceService } from '../../core/services/device.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucideMail } from '@ng-icons/lucide';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'bio',
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
  imports: [Definition, Loader, NgOptimizedImage, NgIcon],
  standalone: true,
  viewProviders: [provideIcons({ lucideMail, lucideDownload })]
})
export class Bio {
  device = inject(DeviceService)
  theme = inject(ThemeService)
}
