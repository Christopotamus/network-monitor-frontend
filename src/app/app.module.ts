import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodeService } from './node.service';
import { NodeFormComponent } from './node-form/node-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
