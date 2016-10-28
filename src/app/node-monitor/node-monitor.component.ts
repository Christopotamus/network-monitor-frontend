import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeComponent } from '../node/node.component';
import { NodeService } from '../node.service';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

import { Node }  from '../node/node';



@Component({
  selector: 'app-node-monitor',
  templateUrl: './node-monitor.component.html',
  styleUrls: ['./node-monitor.component.css']
})
export class NodeMonitorComponent implements OnInit {
  subscription: Subscription;
  nodes: Node[];
  subCount: number = 0;

  constructor(private nodeService: NodeService, private router: Router) { 
    this.subscription = new Subscription();
    
    this.subscription = this.nodeService.getNodes().subscribe( nodes => {
      this.nodes = nodes;
    });

  }
  ngOnInit() {
    
  }
  addNode(node: Node){
    this.nodeService.addNode(node).subscribe(node => {
      //this.nodes.push(node);   
    }); 
  }

  handleError(){

  }
  onDestroy(){
    console.log("Running destroy");
    this.subscription.unsubscribe();
  }
}
