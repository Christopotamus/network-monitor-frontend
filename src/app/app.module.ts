import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodeService } from './node.service';
import { NodeFormComponent } from './node-manager/node-form/node-form.component';
import { NodeMonitorComponent } from './node-monitor/node-monitor.component';

import { AppRoutingModule } from './app.routing.module';
import { NodeManagerComponent } from './node-manager/node-manager.component';
import { NodeListComponent } from './node-manager/node-list/node-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeFormComponent,
    NodeMonitorComponent,
    NodeManagerComponent,
    NodeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
