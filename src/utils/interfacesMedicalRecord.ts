export interface AnamneseData {
    serviceId: number;
    bloodPressure: string;
    glucose: string;
    temperature: string;
    respiratoryRate: string;
    bloodType: string;
    weight: string;
    heartRate: string;
    saturation: string;
    height: string;
    antecPathological: boolean;
    necesPsicobio: boolean;
    diabetes: boolean;
    medicationsInUse: boolean;
    useOfProthesis: boolean;
    allergies: boolean;
    allergiesType: string;
    antecPathologicalType: string;
    medicationInUseType: string;
    medicalHypothesis: string;
    previousSurgeries: string;
    signsAndSymptoms: string;
    classificationStatus: string;
}


export interface PatientMonitoringData {
    medicalRecordId: number;
    bloodPressure: string;
    glucose: string;
    temperature: string;
    saturation: string;
    respiratoryRate: string;
}

export interface PatientExamMedicationData {
    prescriptionDate: string;
    executionDate: string;
    description: string;
    medicalRecordId: number;
}


export interface FinalizePatientExamMedicationData {
    patientExamId: number;
    executionDate: string;
  }