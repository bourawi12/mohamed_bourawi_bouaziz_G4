import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';

export default function DeliveryTrackingTemplate() {
  const [userLocation, setUserLocation] = useState<any>(null);
  const [courierLocation, setCourierLocation] = useState<any>(null);

  // Get user location
  const getLocation = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setUserLocation({ latitude, longitude });

        // Start courier a bit far
        setCourierLocation({
          latitude: latitude + 0.01,
          longitude: longitude + 0.01,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  };

  // Move courier toward user
  useEffect(() => {
    if (!userLocation || !courierLocation) return;

    const interval = setInterval(() => {
      setCourierLocation((prev: any) => ({
        latitude: prev.latitude - 0.0005,
        longitude: prev.longitude - 0.0005,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [userLocation, courierLocation]);

  useEffect(() => {
    getLocation();
  }, []);

  if (!userLocation || !courierLocation) {
    return (
      <View style={styles.loading}>
        <Text>Finding your courier ☕🚴‍♂️</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker coordinate={userLocation} title="You" pinColor="green" />
        <Marker coordinate={courierLocation} title="Courier" />
      </MapView>

      <View style={styles.card}>
        <Text style={styles.text}>Your coffee is on the way ☕</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
