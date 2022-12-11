import React, { useState, useEffect, useRef, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MapView, { Marker, Polygon } from 'react-native-maps'
import { FAB } from 'react-native-paper'
import LocationService from '../services/LocationService'
import { uuid } from '../utils/uuid'

import { useNavigation } from '@react-navigation/native'
import { CustomListItem } from '../components/CustomListItem'

export const MapScreen = () => {
  const [location, setLocation] = useState(null)
  const [data, setData] = useState([])

  const navigation = useNavigation()
  const mapRef = useRef(null)

  async function start () {
    try {
      const coords = await LocationService.getCurrentLocation()
      setLocation(coords)
      setData([
        {
          id: 1,
          name: 'Polygon 1',
          address: 'Al. das Acácias Bl B',
          polygon: [
            { latitude: coords.latitude - 0.0001, longitude: coords.longitude - 0.0001 },
            { latitude: coords.latitude + 0.0001, longitude: coords.longitude - 0.0001 },
            { latitude: coords.latitude + 0.0001, longitude: coords.longitude + 0.0001 },
            { latitude: coords.latitude - 0.0001, longitude: coords.longitude + 0.0001 }
          ]
        }, {
          id: 2,
          name: 'Polygon 2',
          address: 'Area dos Pioneiros',
          polygon: [
            { latitude: -15.8316379 - 0.0003, longitude: -48.0340222 - 0.0006 },
            { latitude: -15.8316379 - 0.0002, longitude: -48.0340222 + 0.0006 },
            { latitude: -15.8316379 - 0.0002, longitude: -48.0340222 - 0.0006 }
          ]
        }])
    } catch (error) {
      console.error(error)
    }
  }

  const handleMoveToPolygon = (polygon) => {
    mapRef?.current?.fitToCoordinates(polygon)
  }

  const handleMoveToLocation = (location) => {
    mapRef?.current?.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    })
  }

  useEffect(() => {
    start()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.mapContainerStyle}>
      <MapView
        ref={mapRef}
        pitchEnabled={true}
        pitch={45}
        style={styles.mapStyle}
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
        { data.map(item => (<Polygon
          key={item.id}
          coordinates={item.polygon}
          strokeColor="#F00"
          fillColor="#F00"
          street={false}
          fillOpacity={0.5}
          strokeWidth={1}
        />
        ))}
      </MapView>
      <FAB
         icon="plus"
        onPress={() => handleMoveToLocation(location)}
        style={styles.fab}
        />
        </View>
      <ScrollView style={styles.menu} elevation={5}>
        { data.map(item => (
          <CustomListItem key={item.id} item={item} location={location} onClickMoveToPolygon={handleMoveToPolygon} onClickRegister={() => navigation.navigate('photo')} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  mapContainerStyle: {
    flex: 2
  },
  mapStyle: {
    flex: 1
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  cardText: {
    fontSize: 14,
    color: '#444'
  },
  iconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  menu: {
    flex: 1,
    backgroundColor: '#fff'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})

export default MapScreen
