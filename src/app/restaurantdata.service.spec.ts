import { TestBed } from '@angular/core/testing';

import { RestaurantdataService } from './restaurantdata.service';

describe('RestaurantdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantdataService = TestBed.get(RestaurantdataService);
    expect(service).toBeTruthy();
  });
});
