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
      //this.cachedNodes = ...data;
      this.nodeCreated(data);
      this.nodesSubject.next(this.cachedNodes);
    });
  
    new Observable(observer => {
      this.socket.on('node-deleted', (data) => {
        observer.next(data)
      });

    }).subscribe((data) => {
      //this.cachedNodes = ...data;
      this.nodeRemoved(data);
      this.nodesSubject.next(this.cachedNodes);
    });


  }
  addNode(node: Node): Observable<Node>{
    return this.http.post(this.host+'/api/nodes', node, {headers: this.headers})
               .map((r: Response) => r.json() as Node)

  } 
  getNodes(): Observable<Node[]>{
    if(Date.now()/1000 > this.lastFetched + 5){
      this.fetchNodes();
    }
    return this.nodesSubject.asObservable();
  }
  fetchNodes(){
    console.log("fetching nodes");
      return this.http.get(this.host+'/api/nodes')
                      .map((r: Response) =>{
                        this.lastFetched = Date.now()/1000;
                        return r.json() as Node[];
                      }).subscribe((nodes) => {
                        
                        this.cachedNodes = [...nodes]; 
                        console.log("Got some nodes back:", nodes, this.cachedNodes);
                        this.nodesSubject.next(this.cachedNodes);
                      });

  }
  removeNode(node): Observable<Node[]>{
    return this.http.delete(this.host+'/api/nodes/'+ node.id)
                    .map((res: Response) => {
                      return res.json();      
                    }).catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if
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
  nodeRemoved(data){
    let nodeCopy = Object.assign(this.cachedNodes, {} );
    this.cachedNodes = nodeCopy.filter((n) => {return n.id.toString() != data.id.toString()});
  }
  handleError(){

  }
}
