import React from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'
import { TextInputProps, TextStyle, ViewStyle } from 'react-native'
import InputCM from '../Input'

interface InputFieldCMProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  name: TName
  control: Control<TFieldValues>
  rules?: RegisterOptions<TFieldValues, TName>
  label: string
  containerStyle?: ViewStyle
  inputStyle?: TextStyle
  labelStyle?: TextStyle
  defaultValue?: string
}

const InputFieldCM = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  rules,
  label,
  containerStyle,
  inputStyle,
  labelStyle,
  defaultValue,
  ...textInputProps
}: InputFieldCMProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue as any}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <InputCM
          {...textInputProps}
          label={label}
          value={value || ''}
          onChangeText={onChange}
          onBlur={onBlur}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          errorMessage={error?.message}
          showError={!!error}
        />
      )}
    />
  )
}

export default InputFieldCM
