import { Injectable } from '@angular/core';
import { Http,  Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Node } from './node/node';

import * as io from 'socket.io-client';

@Injectable()
export class NodeService {

  host: string = "http://localhost:3000";
  cachedNodes: Node[];

  private nodesSubject: BehaviorSubject<Node[]> = new BehaviorSubject<Node[]>(this.cachedNodes);
  
  socket = io(this.host);

  lastFetched = 0;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { 

    console.log("Initializing socket");
    new Observable(observer => {
      this.socket.on('node-created', (data) => {
        observer.next(data)
      });

    }).subscribe((data) => {
      console.log("Something happened!");
      //this.cachedNodes = ...data;
      this.nodesSubject.next(this.cachedNodes);
      this.nodeCreated(data);
    });

  }
  addNode(node: Node): Observable<Node>{
    return this.http.post(this.host+'/api/nodes', node, {headers: this.headers})
               .map((r: Response) => r.json() as Node)

  } 
  getNodes(): Observable<Node[]>{
    if(Date.now()/1000 > this.lastFetched + 5){
      return this.http.get(this.host+'/api/nodes')
                      .map((r: Response) =>{
                        this.lastFetched = Date.now()/1000;
                        this.cachedNodes = [...r.json() as Node[]]; 
                        return this.cachedNodes;
                        //return this.cachedNodes;
                      });

    }else{
      this.nodesSubject.next(this.cachedNodes);
      return this.nodesSubject.asObservable();

    }
  }
  nodeCreated(data){
    let hasUpdated: boolean = false;
    this.cachedNodes.map((n) => {
      if(n.id === data.id){
        n.active = data.active;
        hasUpdated = true;
      } 
    });
    if( hasUpdated == false ){
      this.cachedNodes.push(data);   
      //this.nodesSubject.next([...this.cachedNodes]);
    }
  }
 
  handleError(){

  }
}
