import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LocationInfo } from 'src/app/core/models/city-info.model';
import { CurrentWeatherInfo } from 'src/app/core/models/current-weather-info.model';
import { AppState } from 'src/app/core/store';
import { selectSelectedLocation } from 'src/app/core/store/selectors/location.selectors';
import { selectWeatherForSelectedLocation } from 'src/app/core/store/selectors/weather.selectors';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCardComponent implements OnInit {
  public weather: CurrentWeatherInfo;
  public weatherErrorMessage: string;
  public weatherLoaded: boolean;

  public location: LocationInfo;
  public locationErrorMessage: string;
  public locationLoaded: boolean;

  constructor(
    private store: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.store.select(selectWeatherForSelectedLocation).subscribe({
      next: (weatherState) => {
        this.weather = weatherState.weather;
        this.weatherErrorMessage = weatherState.errorMessage;
        this.weatherLoaded = weatherState.loaded;
        this.changeDetectorRef.detectChanges();
      }
    });
    // tslint:disable-next-line: deprecation
    this.store.select(selectSelectedLocation).subscribe({
      next: (selectedLocation) => {
        this.location = selectedLocation.locationInfo;
        this.locationErrorMessage = selectedLocation.errorMessage;
        this.locationLoaded = selectedLocation.loaded;
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
