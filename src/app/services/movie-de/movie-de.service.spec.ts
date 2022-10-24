import { TestBed } from '@angular/core/testing';

import { MovieDeService } from './movie-de.service';

describe('MovieDeService', () => {
  let service: MovieDeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
