import { FC, ReactNode } from 'react'
import { Control, useController } from 'react-hook-form'
import { InputAdornment, TextField } from '@mui/material'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import styled from 'styled-components/macro'
import { fontFamily } from '../styles/mixins'

export const CustomTextField = styled(TextField)`
&&{
  margin: 0;
  background:${({ theme }) => theme.colors.white};
  border-radius: 4px;
  
}
  && .css-1gywuxd-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
  
  && .MuiOutlinedInput-root{
    ${fontFamily()}
    padding: 0 8px;
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 24px;
  }
  
  && input{

    padding: 10px 0;
    height: 28px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.darkBlack};
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }

  & .MuiFormHelperText-root {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
`

type TProps = {
  name: string
  control: Control<any>
  rules?: RegisterOptions
  handleChange?: (value: string) => string
  icon?: ReactNode,
  iconError?: ReactNode
  iconPosition?: 'start' | 'end'
} & TextFieldProps

const CustomInput: FC<TProps> = ({
  control,
  name,
  rules,
  icon,
  iconError,
  iconPosition,
  handleChange,
  InputProps,
  ...rest
}) => {
  const {
    field,
    formState: { errors }
  } = useController({
    name,
    control,
    rules
  })

  return (
    <CustomTextField
      {...field}
      {...rest}
      value={field.value || ''}
      onChange={(e) => {
        // eslint-disable-next-line no-unused-expressions
        handleChange ? field.onChange(handleChange(e.target.value)) : field.onChange(e)
      }}
      fullWidth
      sx={{ marginTop: 1 }}
      InputProps={{
        inputProps: {
          'aria-label': name
        },
        endAdornment: errors[name]
          ? <InputAdornment sx={{ color: 'red' }} position="end">{iconError}</InputAdornment>
          : undefined,
        startAdornment: icon
          ? <InputAdornment sx={errors[name] && { color: 'red' }} position={iconPosition || 'start'}>{icon}</InputAdornment>
          : undefined,
        ...InputProps
      }}
      error={!!errors[name]}
    />
  )
}

export default CustomInput
