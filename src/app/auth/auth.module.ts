import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutes } from './auth.routing';
import { AuthComponent } from './auth.component';
import { LayoutsModule } from '@shared/layouts/layouts.module';
import { MaterialModule } from 'app/material/material.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutes,
    LayoutsModule,
    MaterialModule
  ]
})
export class AuthModule {
}
