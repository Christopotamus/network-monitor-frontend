import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service.ts';
import { Node } from '../node/node';

@Component({
  selector: 'app-node-manager',
  templateUrl: './node-manager.component.html',
  styleUrls: ['./node-manager.component.css']
})
export class NodeManagerComponent implements OnInit {
  nodes: Node[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
  }

}
