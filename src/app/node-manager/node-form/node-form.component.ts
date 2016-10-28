import { Component, OnInit, Output } from '@angular/core';
import { NodeService } from '../../node.service';
import { Node } from '../../node/node';

@Component({
  selector: 'node-form',
  templateUrl: './node-form.component.html',
  styleUrls: ['./node-form.component.css']
})
export class NodeFormComponent implements OnInit {
  node: Node;

  constructor(private nodeService: NodeService) { 
    this.node = new Node();
    this.node.address="";
    this.node.name="";

  }
  ngOnInit() {
  }
  submit(){
    this.nodeService.addNode(this.node).subscribe((n) => {
      this.node = new Node();  
    });
  }
}
