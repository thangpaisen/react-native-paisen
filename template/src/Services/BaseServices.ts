// BaseService.ts
import httpClient from './httpClient'
import { AxiosResponse, AxiosError } from 'axios'

export default class BaseService {
  protected async get<T>(url: string, params?: any): Promise<T> {
    try {
      const response = await httpClient.get<T>(url, { params })
      return this.handleSuccess(response)
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  protected async post<T>(url: string, data?: any): Promise<T> {
    try {
      const response = await httpClient.post<T>(url, data)
      return this.handleSuccess(response)
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  protected async put<T>(url: string, data?: any): Promise<T> {
    try {
      const response = await httpClient.put<T>(url, data)
      return this.handleSuccess(response)
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  protected async delete<T>(url: string, params?: any): Promise<T> {
    try {
      const response = await httpClient.delete<T>(url, { params })
      return this.handleSuccess(response)
    } catch (error) {
      this.handleError(error)
      throw error
    }
  }

  protected handleSuccess<T>(response: AxiosResponse<T>): T {
    // Nếu bạn có logic xử lý dữ liệu response đặc biệt, sửa ở đây
    return response.data
  }

  protected handleError(error: AxiosError | any): void {
    // Custom xử lý lỗi ở đây
    if (error.response) {
      console.log('API Error:', error.response.status)
      // Ví dụ: Hiển thị toast khi lỗi
      // Toast.show({ type: 'error', text1: 'API Error', text2: error.response.data.message });
    } else {
      console.log('Network or Unknown Error:', error.message || error)
    }
  }
}
