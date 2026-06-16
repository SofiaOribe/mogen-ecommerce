const APP_ZIP_API = import.meta.env.VITE_ZIPCODEBASE_API_KEY

export type ZipData = {
  city: string
  country_code: string
  latitude: number
  longitude: number
}


export const getZipData = async (zip: string): Promise<ZipData | null> => {
  const res = await fetch(`https://app.zipcodebase.com/api/v1/search?apikey=${APP_ZIP_API}&codes=${zip}`)

  const json = await res.json()

  if (!json.results?.[zip]) return null

  return json.results[zip][0]
}


