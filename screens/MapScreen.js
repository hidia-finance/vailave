import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Menu} from 'react-native-paper';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LocationService from '../services/LocationService';
import TokenContext from '../contexts/TokenContext';

const BottomTabs = createBottomTabNavigator();

const MapScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const {tokens} = useContext(TokenContext);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const coords = await LocationService.getCurrentLocation();
        setLocation(coords);
      } catch (error) {
        console.log(error);
      }
    };
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        )}
      </MapView>
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Icon
            name="menu"
            size={30}
            onPress={() => setMenuVisible(true)}
            containerStyle={styles.menuButton}
          />
        }>
        <Menu.Item title="Tokens" onPress={() => {}} />
        <Menu.Item title={`${tokens}`} onPress={() => {}} />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});

export default MapScreen;
