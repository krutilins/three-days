import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

  public vkAuth(): string {
    const vkApi = environment.vkApi;

    const apiUrl = vkApi.oauth.APIUrl;
    const clientId = vkApi.clientId;
    const redirectUri = vkApi.oauth.redirectUri;
    const responseType = vkApi.oauth.responseType;
    const apiVersion = vkApi.APIVersion;

    const url = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&v=${apiVersion}`;

    return url;
  }

}
