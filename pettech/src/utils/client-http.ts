import fetch from 'node-fetch'

interface IStock {
  name: string
  quantity: number
  relationId: string
}

export async function createProductInStock(product: IStock, token: string) {
  const response = await fetch('http://localhost:3010/stock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(product),
  })

  if (!response.ok) {
    throw new Error(`Failed to create product in stock ${response.status}`)
  }

  return response
}
