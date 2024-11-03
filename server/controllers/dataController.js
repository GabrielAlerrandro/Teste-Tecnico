const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

exports.getAllData = async (req, res) => {
  try {
    const data = await prisma.transactions.findMany()
    res.status(200).json({
      status: "success",
      results: data.length,
      data,
    })
  } catch (error) {
    res.status(500).json({
      error: "Erro ao buscar dados",
    })
  }
}

exports.deleteData = async (req, res) => {
  const id = req.params.id
  try {
    await prisma.transactions.delete({
      where: { id },
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar dados",
      error: error.message,
    })
  }
}

exports.createData = async (req, res) => {
  const { value, note, typeTransaction, date } = req.body
  try {
    const newTransaction = await prisma.transactions.create({
      data: {
        value,
        note,
        typeTransaction,
        date,
      },
    })
    return res.status(201).json({
      message: "success",
      data: newTransaction,
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao criar dados", error: error.message })
  }
}
