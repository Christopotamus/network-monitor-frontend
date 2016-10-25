import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NodeService } from '../node.service';
import { Node } from '../node/node';

@Component({
  selector: 'node-form',
  templateUrl: './node-form.component.html',
  styleUrls: ['./node-form.component.css']
})
export class NodeFormComponent implements OnInit {
  node: Node;
  @Output() nodeAdded = new EventEmitter<Node>();

  constructor(private nodeService: NodeService) { 
    this.node = new Node();
    this.node.address="Address here";
    this.node.name="Name here";

  }

  ngOnInit() {
  }
  submit(){
    this.nodeAdded.emit(this.node);
  }
}
