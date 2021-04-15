import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { CityInfo } from 'src/app/core/models/city-info.model';
import { AutocompleteLocationService } from 'src/app/core/services/autocomplete-location.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  public myControl = new FormControl();
  public cityList: CityInfo[] = [];

  constructor(
    private autocompleteLocationService: AutocompleteLocationService,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.myControl.valueChanges.pipe(
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
  }

  public updateList($event: string): void {
    if ($event.length >= 3) {
      // tslint:disable-next-line: deprecation
      this.autocompleteLocationService.getAutocompleteList($event).subscribe(
        cityList => {
          this.cityList = cityList;
          console.log(this.cityList);
        }
      );
    }
  }

  public trackByFn(index: number, item: CityInfo): string {
    return item.id;
  }

  updateSelectedCity($event: MatAutocompleteSelectedEvent): void {
    const cityInfo: CityInfo = $event.option.value as CityInfo;
    this.myControl.setValue(cityInfo.text);
  }

}
