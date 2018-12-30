import {ModuleWithProviders} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {EmployeeListComponent} from './employee-list.component';

const routes:Routes =[
  {path:'',component:EmployeeListComponent}
]

export const routing:ModuleWithProviders = RouterModule.forChild(routes);