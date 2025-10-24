import { Component } from '@angular/core';
import { Loader } from '../../shared/loader/loader.component';
import { Certificate } from './elements/certificate/certificate.component';

@Component({
  selector: 'certification',
  standalone: true,
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css',
  imports: [Loader, Certificate],
})
export class Certification {}
