import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { DeviceService } from '../../core/services/device.service';

@Component({
  standalone: true,
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class Skills {
  private device = inject(DeviceService);

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private sectionEl: HTMLElement | undefined = undefined;
  private observer!: IntersectionObserver;
  private isInViewport: boolean = false;
  private totalScrollDistance: number = 0;
  private low: number = -500;
  private high: number = 12500;

  //for mobile
  private lastTouchY = 0;

  skills: {
    id: string;
    name: string;
    upperBoundary: number;
    lowerBoundary: number;
    translateXPrefix: string;
    translateYPrefix: string;
    translationXRatio: number;
    translationYRatio: number;
  }[] = [
    {
      id: 'typescript',
      name: 'Typescript',
      upperBoundary: 1000,
      lowerBoundary: 0,
      translateXPrefix: '-',
      translateYPrefix: '',
      translationXRatio: 1,
      translationYRatio: 0,
    },
    {
      id: 'react',
      name: 'React',
      upperBoundary: 2000,
      lowerBoundary: 1000,
      translateXPrefix: '-',
      translateYPrefix: '-',
      translationXRatio: 0.9,
      translationYRatio: 0.4,
    },
    {
      id: 'angular',
      name: 'Angular',
      upperBoundary: 3000,
      lowerBoundary: 2000,
      translateXPrefix: '-',
      translateYPrefix: '-',
      translationXRatio: 0.6,
      translationYRatio: 0.8,
    },
    {
      id: 'flutter',
      name: 'Flutter',
      upperBoundary: 4000,
      lowerBoundary: 3000,
      translateXPrefix: '',
      translateYPrefix: '-',
      translationXRatio: 0,
      translationYRatio: 1,
    },
    {
      id: 'nextjs',
      name: 'NextJS',
      upperBoundary: 5000,
      lowerBoundary: 4000,
      translateXPrefix: '',
      translateYPrefix: '-',
      translationXRatio: 0.6,
      translationYRatio: 0.8,
    },
    {
      id: 'nodejs',
      name: 'NodeJS',
      upperBoundary: 6000,
      lowerBoundary: 5000,
      translateXPrefix: '',
      translateYPrefix: '-',
      translationXRatio: 0.9,
      translationYRatio: 0.4,
    },
    {
      id: 'nestjs',
      name: 'NestJS',
      upperBoundary: 7000,
      lowerBoundary: 6000,
      translateXPrefix: '',
      translateYPrefix: '',
      translationXRatio: 1,
      translationYRatio: 0,
    },
    {
      id: 'docker',
      name: 'Docker',
      upperBoundary: 8000,
      lowerBoundary: 7000,
      translateXPrefix: '',
      translateYPrefix: '',
      translationXRatio: 0.9,
      translationYRatio: 0.4,
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      upperBoundary: 9000,
      lowerBoundary: 8000,
      translateXPrefix: '',
      translateYPrefix: '',
      translationXRatio: 0.65,
      translationYRatio: 0.75,
    },
    {
      id: 'azure-functions',
      name: 'Azure Functions',
      upperBoundary: 10000,
      lowerBoundary: 9000,
      translateXPrefix: '',
      translateYPrefix: '',
      translationXRatio: 0,
      translationYRatio: 1,
    },
    {
      id: 'golang',
      name: 'Go',
      upperBoundary: 11000,
      lowerBoundary: 10000,
      translateXPrefix: '-',
      translateYPrefix: '',
      translationXRatio: 0.65,
      translationYRatio: 0.75,
    },
    {
      id: 'python',
      name: 'Python',
      upperBoundary: 12000,
      lowerBoundary: 11000,
      translateXPrefix: '-',
      translateYPrefix: '',
      translationXRatio: 0.9,
      translationYRatio: 0.4,
    },
  ];

  ngOnInit() {
    if (this.isBrowser) {
      const section = document.getElementById('skills-section-id');

      if (section) {
        this.sectionEl = section;

        const options = {
          root: null,
          threshold: 0.8,
        };

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isInViewport = true;
            }
          });
        }, options);

        this.observer.observe(this.sectionEl);

        if (this.device.isMobile) {
          window.addEventListener('touchstart', this.getLastTouchY);
          window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        } else {
          window.addEventListener('wheel', this.handleScroll, { passive: false });
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.sectionEl) {
      window.removeEventListener('wheel', this.handleScroll);
      this.observer.disconnect();
    }
  }

  getLastTouchY = (e: TouchEvent) => {
    this.lastTouchY = e.touches[0].clientY;
  };

  handleTouchMove = (e: TouchEvent) => {
    const deltaY = this.lastTouchY - e.touches[0].clientY;

    this.handleTranformation(e, deltaY);
  };

  handleScroll = (event: WheelEvent) => {
    this.handleTranformation(event, event.deltaY);
  };

  handleTranformation = (event: WheelEvent | TouchEvent, deltaY: number) => {
    // console.log('this.isInViewport', this.isInViewport);

    if (this.isInViewport) {
      this.totalScrollDistance = Math.max(
        this.low,
        Math.min(this.high, this.totalScrollDistance + deltaY)
      );

      //   console.log('this.totalScrollDistance', this.totalScrollDistance);

      if (this.totalScrollDistance > this.low && this.totalScrollDistance < this.high) {
        event.preventDefault();

        this.skills.forEach((skill) => {
          if (
            this.totalScrollDistance > skill.lowerBoundary &&
            this.totalScrollDistance <= skill.upperBoundary
          ) {
            const skillEl = document.getElementById(skill.id);

            // console.log('skill id', skill.id);

            if (!!skillEl) {
              let translation = (this.totalScrollDistance - skill.lowerBoundary) / 3;

              if (this.device.isMobile) {
                translation = translation / 3;
              }

              skillEl.style.transform = `translate3d(${skill.translateXPrefix}${
                translation * skill.translationXRatio
              }px, ${skill.translateYPrefix}${translation * skill.translationYRatio}px, 0)`;

              skillEl.style.opacity = `${
                (this.totalScrollDistance - skill.lowerBoundary) / skill.upperBoundary
              }`;
            }
          } else {
            if (this.totalScrollDistance > skill.upperBoundary) {
              const skillEl = document.getElementById(skill.id);

              //   console.log('skill id (higher than upper)', skill.id);

              let translation = (skill.upperBoundary - skill.lowerBoundary) / 3;

              if (this.device.isMobile) {
                translation = translation / 3;
              }

              if (!!skillEl) {
                skillEl.style.transform = `translate3d(${skill.translateXPrefix}${
                  translation * skill.translationXRatio
                }px, ${skill.translateYPrefix}${translation * skill.translationYRatio}px, 0)`;
                skillEl.style.opacity = '1';
              }
            }

            if (this.totalScrollDistance < skill.lowerBoundary) {
              const skillEl = document.getElementById(skill.id);

              if (!!skillEl) {
                skillEl.style.transform = `translate3d(0, 0, 0)`;
                skillEl.style.opacity = '0';
              }
            }
          }
        });
      }
      //   else if (this.totalScrollDistance === this.low) {
      //     this.skills.forEach((skill) => {
      //       const skillEl = document.getElementById(skill.id);

      //       if (!!skillEl) {
      //         skillEl.style.transform = `translate3d(0, 0, 0)`;
      //         skillEl.style.opacity = '0';
      //       }
      //     });
      //     this.isInViewport = false;
      //   }
      //   else if (this.totalScrollDistance === this.high) {
      //     this.skills.forEach((skill) => {
      //       const skillEl = document.getElementById(skill.id);

      //       //   console.log('skill id (higher than upper)', skill.id);

      //       let translation = (skill.upperBoundary - skill.lowerBoundary) / 3;

      //       if (this.device.isMobile) {
      //         translation = translation / 3;
      //       }

      //       if (!!skillEl) {
      //         skillEl.style.transform = `translate3d(${skill.translateXPrefix}${
      //           translation * skill.translationXRatio
      //         }px, ${skill.translateYPrefix}${translation * skill.translationYRatio}px, 0)`;
      //         skillEl.style.opacity = '1';
      //       }
      //     });
      //     this.isInViewport = false;
      //   }
      else {
        this.isInViewport = false;
      }
    } else {
      this.isInViewport = false;
    }
  };
}
