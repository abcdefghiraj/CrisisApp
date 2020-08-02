import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BarcodeScanner from './BarcodeScanner'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Platform
} from "react-native";

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? 30 : 0}}>
      <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: null }}
          
        />
        <Stack.Screen name="Barcode" component={BarcodeScanner} options={{ title: null }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}


function Home({navigation}) {
  return (
    <>
      <View style={{ width: "100%", height: 50, backgroundColor: "#f44336" }}>
        <Text
          style={{
            padding: 15,
            color: "white",
            fontSize: 18,
            lineHeight: 20,
            fontWeight: "500",
          }}
        >
          Crisis Code
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <View style={{ backgroundColor: "white", height: 100, width: 100 }}>
            <Image
              style={{ flex: 1 }}
              resizeMode="contain"
              source={require("./assets/icon.png")}
            ></Image>
          </View>
          <Text
            style={{
              fontSize: 22,
              textAlign: "center",
              color: "gray",
              marginTop: 5,
            }}
          >
            One Life Protect It
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Barcode')
          }}>
            <View
              style={[
                styles.button,
                { height: 55, marginTop: 40, padding: 10 },
              ]}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>{"SCAN "}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "gray", padding: 10 }}>Scan with Camera</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.in/maps/search/ambulance+near+me/"
                )
              }
            >
              <View
                style={[styles.button, { height: 35, margin: 10, padding: 6 }]}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {"GET AMBULANCE "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.in/maps/search/hospital+near+me/"
                )
              }
            >
              <View
                style={[styles.button, { height: 35, margin: 10, padding: 6 }]}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {"CALL HOSPITAL "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.button,
            { height: 35, margin: 10, padding: 6, width: "90%" },
          ]}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.google.co.in/maps/search/police+station+near+me/"
              )
            }
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {"CALL POLICE "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.in/maps/search/fuel+pump+near+me/"
                )
              }
            >
              <View
                style={[styles.button, { height: 35, margin: 10, padding: 6 }]}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {"FUEL PUMP "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.in/maps/search/puncture+shop+near+me/"
                )
              }
            >
              <View
                style={[styles.button, { height: 35, margin: 10, padding: 6 }]}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {"PUNCTURE SHOP "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.in/maps/search/motorcycle+garage+near+me/"
                )
              }
            >
              <View
                style={[styles.button, { height: 35, margin: 10, padding: 6 }]}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {"BIKE GARAGE "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.in/maps/search/car+garage+near+me/"
                )
              }
            >
              <View
                style={[styles.button, { height: 35, margin: 10, padding: 6 }]}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {"CAR GARAGE "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.getcrisiscode.com")}
          >
            <Text
              style={{
                marginTop: 20,
                fontSize: 14,
                textDecorationLine: "underline",
                color: "#e91e63",
              }}
            >
              www.getcrisiscode.com
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
