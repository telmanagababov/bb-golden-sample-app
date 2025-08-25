import { Component, inject } from '@angular/core';
import {
  LogoutTrackerEvent,
  Tracker,
} from '@backbase/foundation-ang/observability';
import { LayoutService } from '@backbase/ui-ang/layout';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isAuthenticated = false;

  readonly oAuthService: OAuthService = inject(OAuthService);
  readonly layoutService: LayoutService = inject(LayoutService);
  readonly tracker: Tracker | null = inject(Tracker, {
    optional: true,
  });

  constructor() {
    this.isAuthenticated =
      environment.mockEnabled ?? this.oAuthService.hasValidAccessToken();
  }

  logout(): void {
    this.tracker?.publish(new LogoutTrackerEvent());
    this.oAuthService.logOut(true);
  }

  focusMainContainer(event: MouseEvent) {
    const element = event.view?.window.document.querySelector(
      '[role="main"]'
    ) as HTMLElement | undefined;
    element?.focus();
  }
}
