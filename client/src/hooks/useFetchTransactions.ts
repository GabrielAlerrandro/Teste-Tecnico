import { dataItem } from "@/interfaces/interfaces"
import { createItem, deleteData, getAllData } from "@/service/requests"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

function useFetchTransactions() {
  const queryClient = useQueryClient()

  const handleError = (action: string, error: Error) => {
    console.error(`Erro ao: ${action}: `, error.message)
  }

  const deleteItem = async (id: string) => {
    await deleteData(id)
  }

  const addItem = async (newItem: dataItem) => {
    await createItem(newItem)
  }

  const {
    data: transactions,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getAllData,
    queryKey: ["transactions"],
  })

  const deleteMutation = useMutation({
    mutationFn: deleteItem,
    mutationKey: ["transactions"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] })
    },
    onError: (error) => {
      handleError("deletar dados", error)
    },
  })

  const createMutation = useMutation({
    mutationFn: addItem,
    mutationKey: ["transactions"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] })
    },
    onError: (error) => {
      handleError("criar transação", error)
    },
  })

  const handleDeleteItem = (id: string) => {
    deleteMutation.mutate(id)
  }

  const handleAddItem = (newItem: dataItem) => {
    createMutation.mutate(newItem)
  }

  return {
    transactions,
    handleAddItem,
    handleDeleteItem,
    isLoading,
    isError,
  }
}

export default useFetchTransactions
