import React, { useState, useEffect, useContext, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, Polygon } from 'react-native-maps'
import { Button } from 'react-native-paper'
import LocationService from '../services/LocationService'
import TokenContext from '../contexts/TokenContext'
import { isPointInPolygon } from 'geolib'
import { useNavigation } from '@react-navigation/native'

export const MapScreen = () => {
  const [location, setLocation] = useState(null)
  const [polygonCoords, setPolygonCoords] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const { tokens } = useContext(TokenContext)
  const navigation = useNavigation()
  const mapRef = useRef(null)

  const handleMapPress = () => {
  }

  useEffect(() => {
    const getLocation = async () => {
      try {
        const coords = await LocationService.getCurrentLocation()
        setLocation(coords)

        setPolygonCoords([
          { latitude: coords.latitude - 0.0001, longitude: coords.longitude - 0.0001 },
          { latitude: coords.latitude + 0.0001, longitude: coords.longitude - 0.0001 },
          { latitude: coords.latitude + 0.0001, longitude: coords.longitude + 0.0001 },
          { latitude: coords.latitude - 0.0001, longitude: coords.longitude + 0.0001 }
        ])
      } catch (error) {
        console.log(error)
      }
    }
    getLocation()
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        pitchEnabled={true} // Enable map tilt
        pitch={45} // Set the initial tilt angle to 45 degrees
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}
        region={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
          />
        )}
        { polygonCoords && <Polygon
          coordinates={polygonCoords}
          strokeColor="#F00"
          fillColor="#F00"
          fillOpacity={0.5}
          strokeWidth={1}
        />}
      </MapView>
      <View style={styles.menuButton}>
       { isPointInPolygon(location, polygonCoords) && <Button icon="walk" onPress={() => { navigation.navigate('photo') }} mode="contained" size="large">Registrar</Button>}
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 60,
    padding: 2
  }
})

export default MapScreen
