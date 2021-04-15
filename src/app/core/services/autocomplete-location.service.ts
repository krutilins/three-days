import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CityInfo } from '../models/city-info.model';
import { GeoapifyMetadata } from '../models/geoapify-metadata.model';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteLocationService {
  private APIKey = '';
  private APIUrl = '';
  private APIEndpoint = '';

  constructor(private httpClient: HttpClient) {
    this.APIKey = environment.geoApify.APIKey;
    this.APIUrl = environment.geoApify.APIUrl;
    this.APIEndpoint = environment.geoApify.autocompleteEndpoint;
  }

  getAutocompleteList(request: string): Observable<CityInfo[]> {
    return this.getGeoapifyMetadata(request).pipe(
      map(metadata => {
        return metadata.features.map(feature => {
          const properties = feature.properties;
          return {
            id: properties.place_id,
            coordinates: {
              lon: properties.lon,
              lat: properties.lat
            },
            text: properties.formatted
          };
        });
      })
    );
  }

  private getGeoapifyMetadata(request: string): Observable<GeoapifyMetadata> { // TODO: delete 'any' type
    const options = {
      params: new HttpParams({
        fromObject: {
          apiKey: this.APIKey,
          text: request
        }
      })
    };

    return this.httpClient.get<GeoapifyMetadata>(`${this.APIUrl + this.APIEndpoint}`, options).pipe(
      catchError(error => { // TODO: should I implement error handler here?
        return throwError('error when retrieving geoapify metadata:', error);
      })
    );
  }
}
