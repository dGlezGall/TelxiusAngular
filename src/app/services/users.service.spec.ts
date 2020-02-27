import { TestBed } from '@angular/core/testing';

import { JsonUserService } from './users.service';

describe('UsersService', () => {
    let service: JsonUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(JsonUserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
