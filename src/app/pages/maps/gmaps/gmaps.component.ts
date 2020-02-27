import { Component, OnInit } from '@angular/core';

import { JsonUser } from '../../../models/JsonUser';
import { JsonUserService } from '../../../services/users.service';

@Component({
    selector: 'ngx-gmaps',
    styleUrls: ['./gmaps.component.scss'],
    templateUrl: './gmaps.component.html'
})
export class GmapsComponent implements OnInit {

    lat = 51.678418;
    lng = 7.809007;

    users: JsonUser[] = [];

    constructor(public jsonUserService: JsonUserService) {
    }

    ngOnInit(): void {
        this.jsonUserService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                },
                err => console.error(err)
            )
        while (true) {
            break;
        }
    }

    randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
