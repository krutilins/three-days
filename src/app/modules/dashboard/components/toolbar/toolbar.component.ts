import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { map, startWith } from 'rxjs/operators';
import { LocationInfo } from 'src/app/core/models/city-info.model';
import { VkProfileInfo } from 'src/app/core/models/vk-profile-info.model';
import { WeatherAPIes } from 'src/app/core/models/weather-apies.model';
import { AutocompleteLocationService } from 'src/app/core/services/autocomplete-location.service';
import { AppState } from 'src/app/core/store';
import { changeWeatherAPI } from 'src/app/core/store/actions/api-selector.actions';
import { updateSelectedCityInfo } from 'src/app/core/store/actions/location.actions';
import { weatherLoad } from 'src/app/core/store/actions/weather.actions';
import { selectSelectedAPI } from 'src/app/core/store/selectors/api-selector.selectors';
import { selectVKProfile } from 'src/app/core/store/selectors/vk-profile.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  public locationInputControl = new FormControl();
  public selectedAPIControl = new FormControl();

  public cityList: LocationInfo[] = [];
  public weatherAPIes = WeatherAPIes;

  public vkProfile: VkProfileInfo;

  constructor(
    private autocompleteLocationService: AutocompleteLocationService,
    private changeDetectionRef: ChangeDetectorRef,
    private store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.locationInputControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (value.length >= 3) {
          // tslint:disable-next-line: deprecation
          this.autocompleteLocationService.getAutocompleteList(value).subscribe(
            cityList => {
              this.cityList = cityList;
              this.changeDetectionRef.detectChanges();
            }
          );
        }
      })
      // tslint:disable-next-line: deprecation
    ).subscribe();

    // tslint:disable-next-line: deprecation
    this.store.select(selectSelectedAPI).subscribe(selectedAPI => this.selectedAPIControl.setValue(selectedAPI));
    this.store.select(selectVKProfile).subscribe(vkProfile => {
      this.vkProfile = vkProfile.profile;
      this.changeDetectionRef.detectChanges();
    });
  }

  public updateSelectedAPI($event: MatRadioChange): void {
    this.store.dispatch(changeWeatherAPI({ weatherAPI: $event.value as WeatherAPIes }));
  }

  public updateSelectedCity($event: MatAutocompleteSelectedEvent): void {
    const locationInfo: LocationInfo = $event.option.value as LocationInfo;
    this.locationInputControl.setValue(locationInfo.text);
    this.store.dispatch(updateSelectedCityInfo({ locationInfo }));
    if (this.selectedAPIControl.value) {
      this.store.dispatch(weatherLoad({ selectedAPI: this.selectedAPIControl.value, coordinates: locationInfo.coordinates }));
    }
  }

  public trackByFn(index: number, item: LocationInfo): string {
    return item.id;
  }
}
