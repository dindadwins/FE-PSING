export interface FormData {
  umur: string;
  gender: string;
  domisili: string;
  profesi: string;
  status_perkawinan: string;
  tujuan: Purpose;
  penghasilan: string;
  persentase_tabungan: string;
  rate_fungsionalitas: number;
  rate_admin: number;
  rate_limit: number;
  rate_bunga: number;
  rate_setoran_awal: number;
  rate_kebutuhan: number;
}

export interface PrivateData {
  umur: number;
  gender: string;
  domisili: string;
  profesi: string;
  status_perkawinan: string;
}

export interface PersonalChar {
  tujuan: Purpose;
  penghasilan: string;
  persentasi_tabungan: string;
}

export interface CheckedValue {
  value: string;
  is_checked: boolean;
}

export interface Purpose {
  investasi: number;
  simpanan_jangka_panjang: number;
  kegiatan_sehari_hari: number;
  tujuan_lainnya: number;
}

export interface Result {
  predicted_class: string;
  compatibility: string;
  top_3_recommendations: Recommendations[];
}

export interface Recommendations {
  class_name: string;
  probability: string;
}
