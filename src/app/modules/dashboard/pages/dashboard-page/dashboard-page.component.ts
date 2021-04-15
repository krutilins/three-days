import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store';
import { loadCurrentUserLocation } from 'src/app/core/store/actions/location.actions';
import { weatherLoad } from 'src/app/core/store/actions/weather.actions';
import { selectSelectedAPI } from 'src/app/core/store/selectors/api-selector.selectors';
import { selectSelectedLocation } from 'src/app/core/store/selectors/location.selectors';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(loadCurrentUserLocation());

    // tslint:disable-next-line: deprecation
    this.store.select(selectSelectedAPI).subscribe(selectedAPI => { // TODO: I don't like this part of my code
      // tslint:disable-next-line: deprecation
      this.store.select(selectSelectedLocation).subscribe(selectedLocation => {

        if (selectedLocation.loaded && selectedAPI) {
          this.store.dispatch(weatherLoad({
            selectedAPI,
            coordinates: selectedLocation.locationInfo.coordinates
          }));
        }
      });
    });

  }
}
