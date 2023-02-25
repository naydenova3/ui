export interface BedData {
  bed: AllPatientData;
}

export interface AllPatientData {
  id: string;
  patient: PatientData;
}

export interface PatientData {
  name: string;
  age: number;
  mrn: string;
  dateOfBirth: string;
  deviceMappings: DeviceMappings[];
}

export interface DeviceMappings {
  device: DeviceData;
}

export interface DeviceData {
  id: string;
  category: string;
  type: string;
  model: string;
  measurements: SingleMeasurement[];
  alarms: AlarmMeasurement[];
}

export interface SingleMeasurement {
  id: string;
  value: string;
  metaData: MeasureMetaData | null;
}

export interface MeasureMetaData {
  color: string;
  uom: string | null;
}

export interface AlarmMeasurement {
  id: string;
  value: string;
  metaData: AlarmsMetaData;
}

export interface AlarmsMetaData {
  color: string;
  backgroundColor: string;
  level: string;
}
