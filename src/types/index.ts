export interface state{
    theme: Themes
    formData: FormData
    setFormData: (formData: FormData) => unknown
    checkInputs: () => void
}

export interface FormData {
    name: string;
    email: string;
    phone: string;
  }

  export enum Themes {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface PerformanceEvent{
  start: PerformanceMark
  end: PerformanceMark
  duration: number
  measurementInput: MeasurementInput
}

export enum MeasurementInput {
  A = 'a',
  B = 'b'
}

export interface PerformanceMeasurement {
  percentage: number
  difference: number
}