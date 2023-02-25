import { PatientComponent } from './patient/patient.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [PatientComponent],
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
