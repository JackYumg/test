import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import {NodeListComponent} from './node-list/node-list.component';
import {LayoutComponent} from './layout/layout.component';
import {SharedModule} from '../shared/shared.module';
import {TaskListComponent} from './task-list/task-list.component';


@NgModule({
  declarations: [
      NodeListComponent,
      LayoutComponent,
      TaskListComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule
  ]
})
export class NoteModule { }
