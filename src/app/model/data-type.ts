export interface ServiceResponse<T> {
  error_schema: ErrorSchema;
  output_schema: T;
}

export interface ErrorSchema {
  error_code: string;
  error_message: string;
}

export interface FormData {
  private_data: PrivateData;
  personal_char: PersonalChar;
}

export interface PrivateData {
  age: number;
  gender: string;
  domicile: string;
  job: string;
  marital: string;
  family: string;
}

export interface PersonalChar {
  purpose: string[];
  salary: string;
  savings: string;
  currency: string;
  access: string;
}

export interface CheckedValue {
  value: string;
  is_checked: boolean;
}

export interface FinalOutput {
  percentage: string;
  savings_product: string;
}
