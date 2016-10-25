import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Node } from './node/node';

@Injectable()
export class NodeService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  addNode(node: Node): Observable<Node>{
    return this.http.post('http://localhost:3000/api/nodes', node, {headers: this.headers})
               .map((r: Response) => r.json() as Node)

  } 
  getNodes(): Observable<Node[]>{
    return this.http
               .get('http://localhost:3000/api/nodes')
               .map((r: Response) => r.json() as Node[]);
  }
  handleError(){
    
  }
}
