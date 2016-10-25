import { Component } from '@angular/core';
import { NodeComponent } from './node/node.component';
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
  nodes: Observable<Node[]>;

  constructor(private nodeService: NodeService){
  }  
  ngOnInit(): void {
    this.nodes = this.nodeService.getNodes()
  }
  handleError(){

  }
}
