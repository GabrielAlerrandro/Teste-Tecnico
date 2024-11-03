import { Trash } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import useTransactions from "@/hooks/useFetchTransactions"
import { dataItem } from "@/interfaces/interfaces"

const getTextColor = (texto: string) => {
  switch (texto) {
    case "Receita":
      return "text-[#5932EA]"
    case "Despesa":
      return "text-[#EA3232]"
    default:
      return "text-black"
  }
}

const CustomTable = () => {
  const { transactions, handleDeleteItem } = useTransactions()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-[#000]">Valor</TableHead>
          <TableHead className="font-medium text-[#000]">Data</TableHead>
          <TableHead className="text-[#000]">Observação</TableHead>
          <TableHead className="text-[#000]">Tipo de movimentação</TableHead>
          <TableHead className="text-[#000]">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.data.map((item: dataItem) => (
          <TableRow key={item.id}>
            <TableCell className="font-semibold">{`R$ ${item.value
              .toFixed(2)
              .replace(".", ",")}`}</TableCell>
            <TableCell className="font-semibold">{item.date}</TableCell>
            <TableCell className="font-semibold">{item.note}</TableCell>
            <TableCell
              className={`font-semibold leading-[21px] ${getTextColor(
                item.typeTransaction
              )}`}
            >
              {item.typeTransaction}
            </TableCell>
            <TableCell className="font-semibold cursor-pointer inline-block">
              <Trash fill="#1E1E1E" onClick={() => handleDeleteItem(item.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable
