import { TestBed, inject } from '@angular/core/testing';

import { PubSubService } from './pub-sub.service';

describe('PubSubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PubSubService]
    });
  });

  it('should ...', inject([PubSubService], (service: PubSubService) => {
    expect(service).toBeTruthy();
  }));
});
