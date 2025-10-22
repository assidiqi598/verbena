import { Component } from '@angular/core';
import { Definition } from './elements/definition.component';
import { Loader } from '../../shared/loader/loader.component';

@Component({
  selector: 'bio',
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css',
  imports: [Definition, Loader],
})
export class Bio {}
