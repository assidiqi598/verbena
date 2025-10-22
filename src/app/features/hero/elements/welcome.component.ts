import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class Welcome implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  welcome: string[] = [
    'Hi, Welcome!',
    'االسّلام عليكم ورحمة الله وبركاته',
    'Herzlich Willkommen!',
    'Selamat Datang!',
  ];

  currentIndex: number = 0;
  currentMessage: string = this.welcome[this.currentIndex];

  ngOnInit() {
    interval(3000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.welcome.length;
        this.currentMessage = this.welcome[this.currentIndex];
      });
  }

  ngOnDestroy() {
    // Emit a value to complete the interval subscription
    this.destroy$.next();
    this.destroy$.complete();
  }
}
