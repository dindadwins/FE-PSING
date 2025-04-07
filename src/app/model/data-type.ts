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
  umur: number;
  gender: string;
  domisili: string;
  profesi: string;
  status_perkawinan: string;
  jumlah_tanggungan: string;
}

export interface PersonalChar {
  tujuan: string[];
  penghasilan: string;
  persentasi_tabungan: string;
  currency: string;
  access: string;
}

export interface CheckedValue {
  value: string;
  is_checked: boolean;
}

export interface FinalOutput {
  percentage: string;
  produk: string;
}
