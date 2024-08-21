export const getApiUrl = (path = '') =>
  `${process.env.API_BASE_URL}/api/${path}`

interface GetHelloResponse {
  message: string
}

export const getHello = async () => {
  const res = await fetch(getApiUrl('hello/Shinyoung'))
  return res.json() as Promise<GetHelloResponse>
}
