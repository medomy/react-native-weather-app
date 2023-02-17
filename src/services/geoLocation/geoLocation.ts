import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service"
import { Position } from "../../types/Position";
export async function getGeoLocation() {
    try {
        let _position: Position;
        const grantedLocationPermession = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
            title: "Location Permission needed",
            message: "In order for application to work correctly , you should give permission",
            buttonNeutral: "Ask me later",
            buttonPositive: "While using the app",
            buttonNegative: "never"
        }
        )
        if (grantedLocationPermession === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
                (position) => {
                    _position = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    }
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
            )
        }
        else {
            _position = {
                lat: 0,
                lon: 0
            }
            return _position;
        }
    } catch (e) {
        throw new Error(`couldn't get position , ${e}`);

    }
}

export async function getPermissionLocation() {
    try {
        const grantedLocationPermession = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
            title: "Location Permission needed",
            message: "In order for application to work correctly , you should give permission",
            buttonNeutral: "Ask me later",
            buttonPositive: "While using the app",
            buttonNegative: "never"
        }
        )
        return grantedLocationPermession === PermissionsAndroid.RESULTS.GRANTED
    } catch (err) { }

}