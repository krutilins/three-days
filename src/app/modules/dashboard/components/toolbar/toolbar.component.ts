import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { CityInfo } from 'src/app/core/models/city-info.model';
// import * as cititesJSON from 'src/assets/city.list.json';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  // TODO: get data from JSON for live search
  // cities: CityInfo[] = [];
  // ngOnInit(): void {
  //   console.log(cititesJSON)
  //   this.cities = JSON.parse(JSON.stringify(cititesJSON));
  //   console.log(this.cities);
  // }

}
