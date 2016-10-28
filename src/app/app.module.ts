import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodeService } from './node.service';
import { NodeFormComponent } from './node-form/node-form.component';
import { NodeListComponent } from './node-list/node-list.component';

import { AppRoutingModule } from './app.routing.module';
import { NodeManagerComponent } from './node-manager/node-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeFormComponent,
    NodeListComponent,
    NodeManagerComponent
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
