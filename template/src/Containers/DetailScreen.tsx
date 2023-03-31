import { useRoute } from '@react-navigation/native'
import React, { useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'
import { goBack } from '@/Navigators/utils'

const { height } = Dimensions.get('window')
const ITEM_HEIGHT = height * 0.5

const DetailScreen = () => {
  const route = useRoute<any>()
  const buttonRef = React.useRef<any>()

  const item = route.params?.item

  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>
      <SharedElement id={`item.${item.id}.image_url`}>
        <Image
          source={{ uri: item.image_url }}
          style={{
            width: '100%',
            height: ITEM_HEIGHT,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          resizeMode="cover"
        />
      </SharedElement>
      <Animatable.View
        ref={buttonRef}
        animation="fadeIn"
        duration={600}
        delay={300}
        style={[StyleSheet.absoluteFillObject]}
      >
        <TouchableOpacity
          onPress={() => {
            buttonRef.current.fadeOut(100).then(() => {
              goBack()
            })
          }}
        >
          <Text>ok</Text>
        </TouchableOpacity>
        {/* <MaterialCommunityIcons
          name="close"
          size={28}
          color="#fff"
          style={{
            position: 'absolute',
            top: 40,
            right: 20,
            zIndex: 2,
          }}
          onPress={() => {
            buttonRef.current.fadeOut(100).then(() => {
              navigation.goBack()
            })
          }}
        /> */}
      </Animatable.View>
      <View
        style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20 }}
      >
        <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
          <SharedElement id={`item.${item.id}.title`}>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                lineHeight: 28,
              }}
            >
              {item.title}
            </Text>
          </SharedElement>
          <SharedElement id={`item.${item.id}.description`}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 18,
              }}
            >
              {item.description}
            </Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f',
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  )
}

DetailScreen.sharedElements = (route: any) => {
  const { item } = route.params
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.description`,
      animation: 'fade',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.iconName`,
      animation: 'move',
      resize: 'clip',
    },
  ]
}

export default DetailScreen
