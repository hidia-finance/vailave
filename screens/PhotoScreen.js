import React, { useState, useRef, useEffect } from 'react'
import { View, Image } from 'react-native'
import { requestCameraPermissionsAsync, Camera } from 'expo-camera'
import { Text, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const PhotoScreen = () => {
  const [permissionStatus, setPermissionStatus] = useState(null)
  const [photo, setPhoto] = useState(null)
  const navigation = useNavigation()
  const cameraRef = useRef(null)

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await requestCameraPermissionsAsync()
      setPermissionStatus(status)
    }
    getPermission()
  }, [])

  const takePhoto = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true }
      const photo = await cameraRef.current.takePictureAsync(options)
      setPhoto(photo)
    }
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      {photo
        ? (
          <View style={{ flex: 1 }}>
            <Image source={{ uri: photo.uri }} style={{ width: '100%', height: '100%' }} />
            <Button mode="contained" onPress={() => navigation.navigate('questions')} style={{ position: 'absolute', bottom: 80 }}> Avancar </Button>
          </View>
          )
        : (
          <View style={{ flex: 1 }}>
            {permissionStatus === 'granted' && (<Camera ref={cameraRef} style={{ width: '100%', height: '100%' }} />)}
            <Button mode="contained" onPress={takePhoto} style={{ position: 'absolute', bottom: 80 }}> Tirar foto </Button>
          </View>
          )}
    </View>
  )
}

export default PhotoScreen
