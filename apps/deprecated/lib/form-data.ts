import { AmountUnit, IngredientType } from '@prisma/client'

export type Option = {
  label: string
  value: string | number
}

export const emptyIngredient = { name: '', amount: 0, amountUnit: '' }

export const amountUnitOptions = [AmountUnit.Oz] as const

export const ingredientTypes: Option[] = Object.keys(IngredientType).map(
  (key) => ({
    label: key,
    value: key,
  })
)

export const yesOrNoOptions: Option[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
]
