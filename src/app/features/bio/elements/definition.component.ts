import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'definition',
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css',
  standalone: true,
})
export class Definition implements OnInit, OnDestroy {
  private remove$ = new Subject<void>();

  private definition: string[] = ['Human', 'Muslim', 'Father', 'Software Developer'];

  private currentIndex: number = 0;
  currentDefinition: string = this.definition[this.currentIndex];

  ngOnInit() {
    interval(2000)
      .pipe(takeUntil(this.remove$))
      .subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.definition.length;
        this.currentDefinition = this.definition[this.currentIndex];
      });
  }

  ngOnDestroy() {
    // Emit a value to complete the interval subscription
    this.remove$.next();
    this.remove$.complete();
  }
}
