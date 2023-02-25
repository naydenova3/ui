import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {
  AllPatientData,
  BedData,
} from '../../patient/models/patient-data.interface';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  public patientData$!: Observable<AllPatientData>;
  private patientDataSubject: Subject<AllPatientData> =
    new Subject<AllPatientData>();

  constructor(private http: HttpClient) {
    this.patientData$ = this.patientDataSubject.asObservable();
  }

  public getPatientData(): void {
    let isFirstEndpoint = true;

    setInterval(() => {
      const currentEndpoint = this.updateEndpoint(isFirstEndpoint);
      this.getRequest(currentEndpoint);
      isFirstEndpoint = !isFirstEndpoint;
    }, 2000);
  }

  private getRequest(endpoint: string): void {
    this.http.get<BedData>(endpoint).subscribe((data: BedData) => {
      this.patientDataSubject.next(data.bed);
    });
  }

  private updateEndpoint(isFirstEndpoint: boolean): string {
    const firstEndpoint = `../../assets/data/patient-data-one.json`;
    const secondEndpoint = `../../assets/data/patient-data-two.json`;

    return isFirstEndpoint ? firstEndpoint : secondEndpoint;
  }
}
