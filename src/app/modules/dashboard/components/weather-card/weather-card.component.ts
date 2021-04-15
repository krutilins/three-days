import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CurrentWeatherInfo } from 'src/app/core/models/current-weather-info.model';
import { UserLocation } from 'src/app/core/models/user-location.model';
import { ColorfulCloundsAPIService as ColorfulCloudsAPIService } from 'src/app/core/services/colorful-clouds-api.service';
import { OpenWeatherAPIService } from 'src/app/core/services/open-weather-api.service';
import { UserLocationAPIService } from 'src/app/core/services/user-location-api.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCardComponent implements OnInit {
  public weather: CurrentWeatherInfo = null;
  public errorMessage: string = null;
  public userLocationData: UserLocation = null;

  constructor(
    private openWeatherAPIService: OpenWeatherAPIService,
    private changeDetectionRef: ChangeDetectorRef, // TODO: replace change detection with store observable
    private userLocationAPIService: UserLocationAPIService,
    private colorfulCloudsAPIService: ColorfulCloudsAPIService
  ) { }

  ngOnInit(): void {
    // // tslint:disable-next-line: deprecation //TODO: delete this deprication
    // this.userLocationAPIService.getUserLocatoinInfo().subscribe(
    //   userLocationDataResponse => {
    //     this.userLocationData = userLocationDataResponse;
    //     this.openWeatherAPIService.getCurrentWeather({
    //       lon: this.userLocationData.lng,
    //       lat: this.userLocationData.lat
    //       // tslint:disable-next-line: deprecation //TODO: delete this deprication
    //     }).subscribe(
    //       weatherResponse => {
    //         this.weather = weatherResponse;
    //         this.changeDetectionRef.detectChanges();
    //       },
    //       error => {
    //         this.errorMessage = error;
    //         this.changeDetectionRef.detectChanges();
    //       }
    //     );
    //   }
    // );

    this.userLocationAPIService.getUserLocatoinInfo().subscribe(
      userLocationDataResponse => {
        this.userLocationData = userLocationDataResponse;
        this.colorfulCloudsAPIService.getCurrentWeather({
          lon: this.userLocationData.lng,
          lat: this.userLocationData.lat
        }).subscribe(
          weatherResponse => {
            this.weather = weatherResponse;
            this.changeDetectionRef.detectChanges();
          },
          error => {
            this.errorMessage = error;
            this.changeDetectionRef.detectChanges();
          }
        );
      }
    );
  }

}
