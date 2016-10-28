import { Component, Input, OnInit } from '@angular/core';
import { NodeService } from '../../node.service';

import { Node } from '../../node/node';

@Component({
  selector: 'node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  @Input() nodes: Node[]

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
  }
  deleteNode(node: Node){
    this.nodeService.removeNode(node).subscribe(() => {
      console.log(node);
    });
  }
}
