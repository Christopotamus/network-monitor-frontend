import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeService } from '../node.service.ts';
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

import { Node }  from '../node/node';


@Component({
  selector: 'app-node-manager',
  templateUrl: './node-manager.component.html',
  styleUrls: ['./node-manager.component.css']
})
export class NodeManagerComponent implements OnInit {
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

}
