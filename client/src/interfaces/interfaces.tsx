export interface dataResponse {
  status: string
  results: number
  data: dataItem[]
}

export interface dataItem {
  id: string
  value: number
  date: string
  note: string
  typeTransaction: string
}
