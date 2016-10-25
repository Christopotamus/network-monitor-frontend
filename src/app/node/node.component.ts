import { Component, OnInit, Input } from '@angular/core';
import {Node} from './node';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
