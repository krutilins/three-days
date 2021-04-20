import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/store';
import { loadInitialAuth } from './core/store/actions/vk-auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(loadInitialAuth());
  }

}
