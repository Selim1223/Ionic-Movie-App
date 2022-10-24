import { TestBed } from '@angular/core/testing';

import { MovieFrService } from './movie-fr.service';

describe('MovieFrService', () => {
  let service: MovieFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
