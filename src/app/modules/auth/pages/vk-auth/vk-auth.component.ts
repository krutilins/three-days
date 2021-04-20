import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { VkApiService } from 'src/app/core/services/vk-api.service';
import { AppState } from 'src/app/core/store';
import * as VkAuthActions from 'src/app/core/store/actions/vk-auth.actions';
import { selectVkAuth } from 'src/app/core/store/selectors/vk-auth.selectors';

@Component({
  selector: 'app-vk-auth',
  templateUrl: './vk-auth.component.html',
  styleUrls: ['./vk-auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VkAuthComponent {

  constructor(private router: Router, private vkApi: VkApiService, private store: Store<AppState>) {
    const code = this.router.routerState.snapshot.root.queryParams.code;
    const redirectedUri = location.origin + location.pathname;

    this.store.dispatch(VkAuthActions.auth({ code, redirectedUri }));

    this.store.select(selectVkAuth).subscribe(vkAuthState => {
      if (vkAuthState.authInfo) {
        this.router.navigate(['/dashboard']);
      }


    });
  }

}
