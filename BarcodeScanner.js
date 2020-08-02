import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Clipboard, Alert, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function BarcodeScanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Clipboard.setString(data)
    Alert.alert('Scanned Successfully',`${data} copied to clipboard`,[
        {
          text: 'Open Link',
          onPress: () => {Linking.openURL(data)}
        },
        {
          text: 'Back',
          onPress: () => {navigation.navigate('Home')},
          style: 'cancel'
        }
      ], {cancelable: false});
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button color="#f44336" title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}