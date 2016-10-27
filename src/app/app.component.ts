import { Component, EventEmitter } from '@angular/core';
import { NodeComponent } from './node/node.component';
import { NodeFormComponent } from './node-form/node-form.component';
import { NodeService } from './node.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import { Node }  from './node/node';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes: Node[];
  socket = io('http://localhost:3000');

  constructor(private nodeService: NodeService){
  }  
  ngOnInit(): void {
    this.nodeService.getNodes().subscribe( nodes => {
      this.nodes = nodes;
    });
    
    new Observable(observer => {
      this.socket.on('node-created', (data) => {
        observer.next(data)
      });
         
      }).subscribe((data) => {
        this.nodeCreated(data);
      });

  }
  addNode(node: Node){
    this.nodeService.addNode(node).subscribe(node => {
    //this.nodes.push(node);   
    }); 
  }
  nodeCreated(data){
    let hasUpdated: boolean = false;

    this.nodes.map((n) => {
      if(n.id === data.id){
        n.active = data.active;
        hasUpdated = true;
      } 
    });
    if( hasUpdated == false )
      this.nodes.push(data);   
  }
  handleError(){

  }
}
