import { ModuleWithProviders } from '@angular/core';

import { CreateComponent } from './create/create.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", component:CreateComponent}
]

export const routingCreate:ModuleWithProviders = RouterModule.forChild(routes);
