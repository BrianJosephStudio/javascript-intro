import { ChangeEvent } from "react"
import validator from 'validator';

export const validateInputValue = (event: ChangeEvent): boolean => {
  const targetElement = event.currentTarget as HTMLInputElement

  const inputId = targetElement.id
  const inputData = targetElement.value

  if (
    inputId === "name" &&
    !validator.isEmpty(inputData) &&
    validator.matches(inputData, /^[a-zA-Z\s'-]+$/)
  ) {
    return true;
  }

  if (
    inputId === "email"
  ){
    return validator.isEmail(inputData)
  }

  if( inputId === "phone"){
    return validator.isMobilePhone(inputData)
  }

  return false
}