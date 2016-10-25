/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NodeService } from './node.service';

describe('Service: Node', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeService]
    });
  });

  it('should ...', inject([NodeService], (service: NodeService) => {
    expect(service).toBeTruthy();
  }));
});
