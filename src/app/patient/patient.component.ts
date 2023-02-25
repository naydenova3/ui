import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../core/services/patient.service';
import { CustomDateTransformPipe } from '../shared/pipes/custom-date-transform.pipe';
import {
  PatientData,
  AllPatientData,
  SingleMeasurement,
  DeviceMappings,
} from './models/patient-data.interface';

@Component({
  selector: 'ui-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [DatePipe],
  imports: [CommonModule, CustomDateTransformPipe],
})
export class PatientComponent implements OnInit {
  public roomId?: string;
  public patientInfo?: PatientData;
  public measurementsData?: SingleMeasurement[];
  public defaultColor = '#ffffff';

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatientData();

    this.patientService.patientData$.subscribe((data: AllPatientData) => {
      this.setPatientDataValues(data);
    });
  }

  private setPatientDataValues(data: AllPatientData): void {
    this.roomId = data.id;
    this.patientInfo = data.patient;

    if (data.patient.deviceMappings[0].device.measurements.length) {
      this.measurementsData =
        data.patient.deviceMappings[0].device.measurements;
    }
  }
}
