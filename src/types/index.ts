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