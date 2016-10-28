import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NodeMonitorComponent } from './node-monitor/node-monitor.component';
import { NodeManagerComponent } from './node-manager/node-manager.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: NodeMonitorComponent},
      { path: 'edit_nodes', component: NodeManagerComponent }
    ])
  ],
  exports: [ 
    RouterModule
  ]  
})

export class AppRoutingModule {}
