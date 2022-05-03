export type FieldValidationType = (value: string) => string

export const required: FieldValidationType = (value) => {
  if (value) return undefined;
  return "Field is required";
}

export const maxLengthCreator = (maxLength: number): FieldValidationType => (value) => {
  if (value) {
    if (value.length > maxLength)  return `Max length is ${maxLength}`
  }
  return undefined
}
