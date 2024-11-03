import { Square } from "lucide-react"

const SectionChart = () => {
  return (
    <div className="flex gap-4 mb-6 items-center justify-between">
      <p className="font-[700] pt-[30px] pl-7 text-[22px] ">
        Receitas e despesas
      </p>
      <div className="flex gap-[14px]">
        <p className="font-[700] pt-[30px] flex flex-row">
          <Square fill="#EA3232" stroke="none" />
          Despesas
        </p>
        <p className="font-[700] pt-[30px] flex flex-row mr-[37px]">
          <Square fill="#5932EA" stroke="none" />
          Receitas
        </p>
      </div>
    </div>
  )
}

export default SectionChart
