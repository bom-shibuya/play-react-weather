export interface IWeatherItem {
  dt_text: string
  main: {
    grnd_level: number
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_kf: number
    temp_max: number
    temp_min: number
  }
  weather: Array<{
    description: string
    id: number
    main: string
  }>
}

export type WeatherList = IWeatherItem[]
