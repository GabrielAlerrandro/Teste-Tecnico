import { dataItem } from "@/interfaces/interfaces"
import { api } from "./api"

export function getAllData() {
  return api.get("/").then((response) => {
    return response.data
  })
}

export function deleteData(id: string) {
  return api.delete(`/${id}`)
}

type ommitedDataItem = Omit<dataItem, "id">

export function createItem(data: ommitedDataItem) {
  return api.post("/", {
    value: data.value * 1,
    note: data.note,
    typeTransaction: data.typeTransaction,
    date: data.date,
  })
}
