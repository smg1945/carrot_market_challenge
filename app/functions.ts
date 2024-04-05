
const API_URL = "https://billions-api.nomadcoders.workers.dev/"


export async function getBillions() {
  const response = await fetch(API_URL)
  return response.json()
}

export async function getPerson(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`)
  return response.json()
}