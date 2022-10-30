import { TestBed } from '@angular/core/testing';

import { DicessrvService } from './dicessrv.service';

describe('DicessrvService', () => {
  let service: DicessrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicessrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
