import { Marker } from './Marker';

export interface Location {
    latitude: number;
    longitude: number;
    mapType: string;
    zoom: number;
    markers: Array<Marker>;
}
