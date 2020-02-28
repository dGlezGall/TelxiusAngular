import { Component, OnInit } from '@angular/core';

import { JsonUser } from '../../../models/JsonUser';
import { Location } from '../../../models/Location';
import { Marker } from '../../../models/Marker';
import { JsonUserService } from '../../../services/users.service';

@Component({
    selector: 'ngx-gmaps',
    styleUrls: ['./gmaps.component.scss'],
    templateUrl: './gmaps.component.html',
})
export class GmapsComponent implements OnInit {

    location: Location;
    selectedMarker: Marker;

    users: JsonUser[] = [];
    user: JsonUser;

    constructor(public jsonUserService: JsonUserService) {
    }

    ngOnInit(): void {

        this.location = {
            latitude: 10,
            longitude: 10,
            mapType: 'satelite',
            zoom: 5,
            markers: [],
        };

        this.jsonUserService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                },
                err => console.error(err),
            );

    }

    addMarker(lat: number, lng: number) {
        this.location.markers.push({
            lat,
            lng,
        });
    }

    selectMarker(event: any) {
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude,
        };
    }

    markerDragEnd(coords: any) {
        this.location.latitude = coords.latitude;
        this.location.longitude = coords.longitude;
    }

    randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addUsersMarker() {
        const user = this.users[this.randomInt(0, 10)];
        this.addMarker(+user.address.geo.lat, +user.address.geo.lng);
    }
}

