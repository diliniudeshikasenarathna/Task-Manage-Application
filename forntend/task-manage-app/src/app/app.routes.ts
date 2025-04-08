import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [

    
    {
        path:"task-list",
        component:TaskListComponent
    },
    {
        path:"task-form",
        component:TaskFormComponent
    },
    {
        path:"",
        component:HomeComponent
    }
  
];
