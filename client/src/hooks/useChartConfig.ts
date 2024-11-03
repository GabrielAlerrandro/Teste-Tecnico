import { dataItem } from "@/interfaces/interfaces"
import { ChartConfig } from "../components/ui/chart"
import useTransactions from "@/hooks/useFetchTransactions"

const useChartConfig = () => {
  const { transactions } = useTransactions()

  const transacoes = transactions.data.reduce(
    (acumulador: { receitas: number; despesas: number }, item: dataItem) => {
      switch (item.typeTransaction) {
        case "Receita":
          acumulador.receitas += item.value
          break
        case "Despesa":
          acumulador.despesas += item.value
          break
        default:
          break
      }
      return acumulador
    },
    { receitas: 0, despesas: 0 }
  )

  const maxValue = Math.max(transacoes.receitas, transacoes.despesas) + 20
  const minValue = Math.min(transacoes.receitas, transacoes.despesas)

  const chartConfig = {
    receitas: {
      label: "receitas",
      color: "#5932EA",
    },
    despesas: {
      label: "despesas",
      color: "#EA3232",
    },
  } satisfies ChartConfig

  const chartData = [
    {
      receitas: transacoes.receitas,
      despesas: transacoes.despesas,
    },
  ]

  return {
    maxValue,
    minValue,
    chartData,
    chartConfig,
    transacoes,
  }
}

export default useChartConfig
