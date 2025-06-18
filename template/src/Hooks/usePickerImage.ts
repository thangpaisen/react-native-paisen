/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker'
import { Alert, PermissionsAndroid, Platform, Linking } from 'react-native'
import { check, openSettings, PERMISSIONS, request, RESULTS } from 'react-native-permissions'

export type MediaType = 'photo' | 'video' | 'any'

export interface PropertyTakeMedia {
  width?: number
  height?: number
  cropping?: boolean
  includeBase64?: boolean
  freeStyleCropEnabled?: boolean
  cropperCircleOverlay?: boolean
  useFrontCamera?: boolean
  mediaType?: MediaType
}

export interface PropertyChooseMedia {
  width?: number
  height?: number
  cropping?: boolean
  multipleEnabled?: boolean
  includeBase64?: boolean
  cropperCircleOverlay?: boolean
  freeStyleCropEnabled?: boolean
  mediaType?: MediaType
  maxFiles?: number // Maximum number of files to select
}

interface UsePickerImageResult {
  takeMedia: (options?: PropertyTakeMedia) => Promise<ImageOrVideo>
  chooseMedia: (options?: PropertyChooseMedia) => Promise<ImageOrVideo>
  loading: boolean
  error: string | null
}

/**
 * Hook for picking media (images or videos) using camera or gallery
 * @returns Object with methods to take or choose media, loading state and error
 */
export const usePickerImage = (): UsePickerImageResult => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const takeMedia = async (options?: PropertyTakeMedia): Promise<ImageOrVideo> => {
    try {
      setLoading(true)
      setError(null)

      // check and request camera permission
      let cameraGranted = true
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        cameraGranted = granted === PermissionsAndroid.RESULTS.GRANTED
      } else if (Platform.OS === 'ios') {
        const status = await check(PERMISSIONS.IOS.CAMERA)
        if (status !== RESULTS.GRANTED) {
          const reqStatus = await request(PERMISSIONS.IOS.CAMERA)
          cameraGranted = reqStatus === RESULTS.GRANTED
        }
      }

      if (!cameraGranted) {
        setLoading(false)
        Alert.alert(
          'Yêu cầu quyền truy cập camera',
          'Bạn cần cấp quyền truy cập camera để thực hiện chức năng. Vui lòng vào Cài đặt để cấp quyền.',
          [
            { text: 'Huỷ', style: 'cancel' },
            { text: 'Cài đặt', onPress: () => Linking.openSettings() },
          ]
        )
        throw new Error('Camera permission denied')
      }
      const {
        width = 500,
        height = 500,
        cropping = false,
        includeBase64 = false,
        freeStyleCropEnabled = false,
        cropperCircleOverlay = false,
        useFrontCamera = false,
        mediaType = 'photo',
      } = options || {}

      const media = await ImagePicker.openCamera({
        width,
        height,
        cropping: mediaType === 'photo' ? cropping : false,
        includeBase64,
        freeStyleCropEnabled,
        cropperCircleOverlay,
        useFrontCamera,
        mediaType,
        compressImageQuality: 0.2, // Reduce image quality to 20%
      })

      setLoading(false)
      return media
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
      setLoading(false)
      throw err
    }
  }

  const chooseMedia = async (options?: PropertyChooseMedia): Promise<ImageOrVideo> => {
    try {
      setLoading(true)
      setError(null)

      // check and request photo library permission
      let permissionStatus: string = RESULTS.GRANTED
      if (Platform.OS === 'ios') {
        permissionStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY)
        if (permissionStatus !== RESULTS.GRANTED) {
          permissionStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
        }
      } else if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          permissionStatus = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
          if (permissionStatus !== RESULTS.GRANTED) {
            permissionStatus = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
          }
        } else {
          permissionStatus = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
          if (permissionStatus !== RESULTS.GRANTED) {
            permissionStatus = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
          }
        }
      }
      if (permissionStatus !== RESULTS.GRANTED && permissionStatus !== RESULTS.LIMITED) {
        setLoading(false)
        setError('Bạn cần cấp quyền truy cập thư viện ảnh để chọn ảnh.')
        Alert.alert(
          'Yêu cầu quyền truy cập thư viện ảnh',
          'Bạn cần cấp quyền truy cập thư viện ảnh để chọn ảnh. Vui lòng vào Cài đặt để cấp quyền.',
          [
            { text: 'Huỷ', style: 'cancel' },
            { text: 'Cài đặt', onPress: () => openSettings() },
          ]
        )
        throw new Error('Library permission denied')
      }

      const {
        width = 500,
        height = 500,
        cropping = false,
        multipleEnabled = false,
        includeBase64 = false,
        mediaType = 'photo',
        cropperCircleOverlay,
        maxFiles = 10,
      } = options || {}

      const media = await ImagePicker.openPicker({
        width,
        height,
        cropping: mediaType === 'photo' ? cropping : false,
        multiple: multipleEnabled,
        includeBase64,
        cropperCircleOverlay,
        mediaType,
        maxFiles: multipleEnabled ? maxFiles : 1,
      })

      setLoading(false)
      return media
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
      setLoading(false)
      throw err
    }
  }

  return {
    takeMedia,
    chooseMedia,
    loading,
    error,
  }
}

export default usePickerImage
