import { TestBed } from '@angular/core/testing';

import { MovieEsService } from './movie-es.service';

describe('MovieEsService', () => {
  let service: MovieEsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieEsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
