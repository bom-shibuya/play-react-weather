export const SWITCH_CITY = 'SWITCH_CITY'

export const switchCity = (payload: { city: string }) => ({
  payload,
  type: SWITCH_CITY as typeof SWITCH_CITY
})

export type Actions = ReturnType<typeof switchCity>
