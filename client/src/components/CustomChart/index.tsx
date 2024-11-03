import useChartConfig from "@/hooks/useChartConfig"
import { ChartContainer } from "../ui/chart"
import { Bar, BarChart, CartesianGrid, YAxis } from "recharts"

const CustomChart = () => {
  const { chartConfig, chartData, maxValue, minValue, transacoes } =
    useChartConfig()

  const formattedValue = {
    receitas: transacoes.receitas.toFixed(2).replace(".", ","),
    despesas: transacoes.despesas.toFixed(2).replace(".", ","),
  }
  return (
    <>
      <div className="flex flex-col items-center ">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full ">
          <BarChart data={chartData}>
            <CartesianGrid
              strokeWidth={2}
              stroke="#E0E0E0"
              horizontal={true}
              strokeDasharray="3"
              vertical={false}
            />
            <YAxis
              domain={[minValue, maxValue]}
              ticks={[20, 40, 60, 80, 100]}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey="receitas" fill="var(--color-receitas)" radius={8} />
            <Bar dataKey="despesas" fill="var(--color-despesas)" radius={8} />
          </BarChart>
        </ChartContainer>

        <div className="flex w-full my-3">
          <div className="flex flex-row justify-evenly items-center w-full">
            <span className="text-center font-bold text-[#5932EA]">{`R$ ${formattedValue.receitas}`}</span>
            <span className="text-center font-bold text-[#EA3232]">{`R$ ${formattedValue.despesas}`}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomChart
