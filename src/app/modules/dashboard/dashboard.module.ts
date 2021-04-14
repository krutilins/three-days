import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    DashboardPageComponent,
    WeatherCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }

