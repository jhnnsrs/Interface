import { TestBed, inject } from '@angular/core/testing';

import { SkriptServiceService } from './skript-service.service';

describe('SkriptServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkriptServiceService]
    });
  });

  it('should be created', inject([SkriptServiceService], (service: SkriptServiceService) => {
    expect(service).toBeTruthy();
  }));
});
