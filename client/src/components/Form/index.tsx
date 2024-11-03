import { Plus } from "lucide-react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { dataItem } from "@/interfaces/interfaces"
import { DatePicker } from "../ui/datepicker"

interface handleAddItemProps {
  handleAddItem: (item: dataItem) => void
}

const Form = ({ handleAddItem }: handleAddItemProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<dataItem>()

  const onSubmit: SubmitHandler<dataItem> = async (data) => {
    handleAddItem(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="main">
        <div className="section-input">
          <strong>
            <p>Valor</p>
          </strong>
          <input
            type="number"
            className="inputs w-[189px]"
            placeholder="Digite o valor"
            {...register("value", {
              required: "Valor é obrigatório",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "o valor digitado deve ser maior ou igual a zero",
              },
            })}
            step="0.01"
          />
          {errors.value && (
            <span className="text-red-600 mt-1">{errors.value.message}</span>
          )}
        </div>
        <div className="section-input">
          <strong>
            <p>Data</p>
          </strong>
          <Controller
            name="date"
            rules={{ required: "Data é obrigatória" }}
            control={control}
            render={({ field }) => (
              <DatePicker value={field.value} onChange={field.onChange} />
            )}
          />
          {errors.date && (
            <span className="text-red-600 mt-1">{errors.date.message}</span>
          )}
        </div>
      </div>
      <div className="section-input">
        <p>
          <strong>Observação</strong> (opcional)
        </p>
        <input
          className="inputs"
          placeholder="Digite a observação"
          {...register("note", {
            required: false,
            maxLength: { value: 58, message: "Máximo 60 caracteres" },
          })}
        />
        {errors.note && (
          <span className="text-red-600 mt-1">{errors.note.message}</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-12">
        <div className="flex flex-col">
          <p>
            <strong className=" pb-3">Tipo de Movimentação</strong>
          </p>
          <div className="flex items-center mt-2 gap-2">
            <div className="flex gap-2">
              <input
                type="radio"
                checked
                value="Receita"
                {...register("typeTransaction", {
                  required: "Selecione um tipo",
                })}
              />
              <label>Receita</label>
            </div>
            <div className="flex gap-2 mx-2">
              <input
                type="radio"
                value="Despesa"
                {...register("typeTransaction", {
                  required: "Selecione um tipo",
                })}
              />
              <label>Despesa</label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="button-add flex flex-row gap-2 ">
            <Plus color="#fff" />
            Adicionar
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
