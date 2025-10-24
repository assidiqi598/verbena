import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  readonly isMobile = /Mobi|Android|iPhone|iPad|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
