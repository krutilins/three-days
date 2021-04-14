import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserConnectionInfo } from '../models/user-connection-info.model';
import { UserLocation } from '../models/user-location.model';

@Injectable({
  providedIn: 'root'
})
export class UserLocationAPIService {

  private APIKey: string;
  private APIUrl: string;

  constructor(private httpClient: HttpClient) {
    this.APIKey = environment.geoIpify.APIKey;
    this.APIUrl = environment.geoIpify.APIUrl;
  }

  public getUserLocatoinInfo(): Observable<UserLocation> {

    const options = {
      params: new HttpParams({
        fromObject: {
          apiKey: this.APIKey
        }
      })
    };

    return this.httpClient.get<UserConnectionInfo>(this.APIUrl, options).pipe(
      map(userConnectionInfo => userConnectionInfo.location),
      catchError(error => { // TODO: should I implement error handler here?
        return throwError('error when retrieving use location data:', error);
      })
    );

  }

}
