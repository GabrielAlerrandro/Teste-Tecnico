import "./index.css"
import useTransactions from "./hooks/useFetchTransactions"
import Form from "./components/Form"
import SectionChart from "./components/SectionChart"
import CustomChart from "./components/CustomChart"
import CustomTable from "./components/CustomTable"

function App() {
  const { handleAddItem, isLoading, isError } = useTransactions()

  if (isLoading) return <p>Carregando...</p>
  if (isError) return <p>Erro ao carregar dados</p>

  return (
    <>
      <div className="mx-[125px]">
        <h1 className="heading">controle de caixa</h1>
        <main className="two-cards-container">
          <div className="left-card">
            <h2 className="pt-[30px] px-0 pb-[25px] text-[#000] leading-[33px] font-bold text-[22px]">
              Movimentações
            </h2>
            <Form handleAddItem={handleAddItem} />
          </div>

          <div className="right-card">
            <SectionChart />
            <CustomChart />
          </div>
        </main>

        <div className="left-card mt-6 overflow-y-auto max-h-[250px] scrollbar">
          <CustomTable />
        </div>
      </div>
    </>
  )
}

export default App
