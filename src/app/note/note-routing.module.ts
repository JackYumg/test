import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NodeListComponent} from './node-list/node-list.component';
import {LayoutComponent} from './layout/layout.component';
import {TaskListComponent} from './task-list/task-list.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'note-list'},
            {path: 'note-list', component: NodeListComponent},
            {path: 'task-list', component: TaskListComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoteRoutingModule {
}
