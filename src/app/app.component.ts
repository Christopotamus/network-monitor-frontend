import { Component, EventEmitter } from '@angular/core';
import { NodeComponent } from './node/node.component';
import { NodeFormComponent } from './node-form/node-form.component';
import { NodeService } from './node.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import { Node }  from './node/node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes: Node[];

  constructor(private nodeService: NodeService){
  }  
  ngOnInit(): void {
  this.nodeService.getNodes().subscribe( nodes => {
    this.nodes = nodes;
  })
  }
  addNode(node: Node){
    this.nodeService.addNode(node).subscribe(node => {
      this.nodes.push(node);   
    }); 
  }
  handleError(){

  }
}
