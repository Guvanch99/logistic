import styled, { css } from 'styled-components/macro'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import { RegisterOptions, useController, Control } from 'react-hook-form'
import { FC } from 'react'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import { fontFamily } from '../styles/mixins'

const CustomTextAreaStyled = styled(TextareaAutosize)<{isError: boolean}>`
&&{
  width: 100%;
  ${fontFamily()}
  padding: 0 8px;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  ${({ isError }) => isError && css`
    border: 2px solid ${({ theme }) => theme.colors.red};
  `}
}
`

type TProps = {
  name: string
  control: Control<any>
  rules?: RegisterOptions
} & TextFieldProps

const CustomTextArea: FC<TProps> = ({ name, control, rules }) => {
  const {
    field,
    formState: { errors }
  } = useController({
    name,
    control,
    rules
  })
  return (
    <CustomTextAreaStyled {...field} minRows={3} isError={!!errors[name]}/>
  )
}

export default CustomTextArea
