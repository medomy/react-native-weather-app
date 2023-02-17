import { useEffect, useState } from "react";
import { Position } from "../types/Position";
import { getPermissionLocation } from "../services/geoLocation/geoLocation";
import GeoLocation from "react-native-geolocation-service";

export function useGeoLocation() {
    const [position, setPosition] = useState<Position>();
    const setData = async () => {
        try {
            const permissionGranted = await getPermissionLocation();
            if (permissionGranted) {
                GeoLocation.getCurrentPosition(
                    (position) => {
                        setPosition({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        })
                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
                )
            }

        } catch (err) {
            console.warn(err);
        }
    }
    useEffect(() => {
        setData();
    }, [])
    return position;
}