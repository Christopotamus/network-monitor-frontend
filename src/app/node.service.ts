import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Node } from './node/node';

@Injectable()
export class NodeService {

  constructor(private http: Http) { }
  
  getNodes(): Observable<Node[]>{
    return this.http
               .get('http://localhost:3000/api/nodes')
               .map((r: Response) => r.json() as Node[]);
  }
}
