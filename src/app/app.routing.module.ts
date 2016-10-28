import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NodeListComponent } from './node-list/node-list.component';
import { NodeManagerComponent } from './node-manager/node-manager.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: NodeListComponent},
      { path: 'edit_nodes', component: NodeManagerComponent }
    ])
  ],
  exports: [ 
    RouterModule
  ]  
})

export class AppRoutingModule {}
