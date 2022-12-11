import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { isPointInPolygon } from 'geolib'

export const CustomListItem = ({ item, location, onClickMoveToPolygon, onClickRegister }) => {
  if (!item || Object.keys(location).length === 0) {
    return false
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.cardText}>{item.address}</Text>
      </View>
      <View style={styles.iconContainer}>
        { isPointInPolygon(location, item.polygon)
          ? <Button icon="walk" onPress={onClickRegister } mode="contained" size="large">Registrar</Button>
          : <IconButton
          icon="map-marker"
          mode='contained'
          onPress={ () => onClickMoveToPolygon(item.polygon)}
        /> }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#fff'
  },
  menuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})

export default CustomListItem
