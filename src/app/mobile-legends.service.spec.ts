import { TestBed } from '@angular/core/testing';

import { MobileLegendsService } from './mobile-legends.service';

describe('MobileLegendsService', () => {
  let service: MobileLegendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileLegendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
