import Icons from '@Assets/Icons'
import { ButtonCM, CheckBoxCM, HeaderCM, IconSvgCM, TextCM } from '@Components'
import { Colors } from '@Constants'
import { useAppDispatch, useAppSelector, useToast } from '@Hooks'
import { fetchUserInfo } from '@Redux/Thunks'
import { APP_PADDING } from '@Utils/Utils'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { showToast } = useToast()
  const { user } = useAppSelector((state) => state.user)

  const [checked, setChecked] = React.useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    dispatch(fetchUserInfo())
  }

  return (
    <SafeAreaView style={styles.ctnContainer}>
      <HeaderCM label={'Home Screen'} isShowIconLeft={false} />
      <View style={styles.container}>
        {/* Example Text */}
        <TextCM bold fontSize={24}>
          Example Text: {user?.firstName || 'No User Data'}
        </TextCM>

        {/* Example Button  */}
        <ButtonCM
          label='Toast'
          containerStyle={{
            width: '100%',
          }}
          onPress={() => {
            dispatch(fetchUserInfo())
            showToast('This is a toast message!')
          }}
        />

        {/* Checkbox */}
        <CheckBoxCM
          title='Checkbox'
          checked={checked}
          onPress={() => setChecked(!checked)}
          iconRight
        />

        {/* Radio */}
        <CheckBoxCM title='Radio' checked={checked} onPress={() => setChecked(!checked)} radio />

        {/* Icon */}
        <Icon name='home' size={20} />
        <IconSvgCM source={Icons.IcCalendar} color={Colors.black} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ctnContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    gap: APP_PADDING,
  },
})
