import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { VkAuthInfo } from '../models/user-auth-info.model';
import { VkProfileInfo } from '../models/vk-profile-info.model';
import { AppState } from '../store';
import { selectVkAuth } from '../store/selectors/vk-auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class VkApiService {
  private localStorageKey = 'vkAuth';
  private authInfo: VkAuthInfo;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(selectVkAuth).subscribe(
      vkAuth => {
        this.authInfo = vkAuth.authInfo;
      }
    );
  }

  public getAuthInfoFromLocalStorage(): VkAuthInfo {
    const vkAuthInfoJSON = localStorage.getItem(this.localStorageKey);

    if (localStorage.getItem(this.localStorageKey) !== null) {
      return JSON.parse(vkAuthInfoJSON);
    }

    return null;

  }

  public updateAuthInfoInLocalStorage(authInfo: VkAuthInfo): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(authInfo));
  }

  public signIn(code: string, redirectUri: string): Observable<VkAuthInfo> {
    const options = {
      params: new HttpParams({
        fromObject: {
          code,
          redirect_uri: redirectUri
        }
      })
    };

    return this.http.get<{ user_id: number, expires_in: number, access_token: string }>('http://localhost:2020/auth/vk', options).pipe(
      map(response => {
        const userAuthInfo = {
          userId: response.user_id,
          expiresIn: response.expires_in,
          accessToken: response.access_token
        };

        this.updateAuthInfoInLocalStorage(userAuthInfo);

        return userAuthInfo;
      }),
      catchError(error => throwError('error when retrieving vk auth info:', error))
    );
  }

  public signOut(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  public getProfileInfo(): Observable<VkProfileInfo> {
    if (this.authInfo) {
      const url = environment.vkApi.api.APIUrl + environment.vkApi.api.usersGetEndpoint;

      const options = {
        params: new HttpParams({
          fromObject: {
            user_ids: String(this.authInfo.userId),
            fields: 'photo_100',
            access_token: this.authInfo.accessToken,
            v: '5.130'
          }
        })
      };

      return this.http.get<{
        response: {
          can_access_closed: boolean;
          first_name: string;
          id: number;
          is_closed: boolean;
          last_name: string;
          photo_100: string;
        }[]
      }>(url, options).pipe(
        map(response => {
          const vkProfileInfoResponse = response.response[0];

          const vkProfileInfo: VkProfileInfo = {
            canAccessClosed: vkProfileInfoResponse.can_access_closed,
            firstName: vkProfileInfoResponse.first_name,
            id: vkProfileInfoResponse.id,
            isClosed: vkProfileInfoResponse.is_closed,
            lastName: vkProfileInfoResponse.last_name,
            photo100: vkProfileInfoResponse.photo_100
          };

          return vkProfileInfo;
        }),
        catchError(error => {
          return throwError('error when retriewing user profile', error);
        })
      );
    }
  }
}
