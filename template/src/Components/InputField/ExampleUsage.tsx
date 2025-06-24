// Example usage of InputFieldCM component

import React from 'react'
import { useForm } from 'react-hook-form'
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native'
import InputFieldCM from './index'

interface FormData {
  email: string
  password: string
  confirmPassword: string
  name: string
}

// Validation rules object
const validationRules = {
  name: {
    required: 'Vui lòng nhập họ và tên',
    minLength: {
      value: 2,
      message: 'Họ tên phải có ít nhất 2 ký tự',
    },
  },
  email: {
    required: 'Vui lòng nhập email',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email không hợp lệ',
    },
  },
  password: {
    required: 'Vui lòng nhập mật khẩu',
    minLength: {
      value: 6,
      message: 'Mật khẩu phải có ít nhất 6 ký tự',
    },
  },
  confirmPassword: (getValues: any) => ({
    required: 'Vui lòng nhập lại mật khẩu',
    validate: (value: string) => {
      const password = getValues('password')
      return value === password || 'Mật khẩu không khớp'
    },
  }),
}

const ExampleForm = () => {
  const { control, handleSubmit, getValues } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
  })

  const onSubmit = (data: FormData) => {
    Alert.alert(
      'Form Data',
      `Name: ${data.name}\nEmail: ${data.email}\nPassword: ${data.password}\nConfirm Password: ${data.confirmPassword}`,
      [{ text: 'OK' }]
    )
  }

  return (
    <View style={styles.container}>
      <InputFieldCM
        name='name'
        control={control}
        label='Họ và tên'
        rules={validationRules.name}
        placeholder='Nhập họ và tên của bạn'
      />

      <InputFieldCM
        name='email'
        control={control}
        label='Email'
        rules={validationRules.email}
        placeholder='example@email.com'
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <InputFieldCM
        name='password'
        control={control}
        label='Mật khẩu'
        rules={validationRules.password}
        placeholder='Nhập mật khẩu'
        secureTextEntry
      />

      <InputFieldCM
        name='confirmPassword'
        control={control}
        label='Nhập lại mật khẩu'
        rules={validationRules.confirmPassword(getValues)}
        placeholder='Nhập lại mật khẩu'
        secureTextEntry
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Kiểm tra Form</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default ExampleForm
