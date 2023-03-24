export interface IMicroGETResponse {
  status: number;
  statusText?: string;
  data: [] | {} | string;
}

export interface IMicroPOSTResponse {
  status: number;
  statusText?: string;
  data?: [] | {} | string;
}
