import { AsyncPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ErrorStatus,
  MakeTransferJourneyConfiguration,
  MakeTransferJourneyState,
  MakeTransferPermissionsService,
  TransferLoadingStatus,
} from '@backbase/transfer-journey/internal/data-access';
import {
  Transfer,
  TransferSubmitEvent,
} from '@backbase/transfer-journey/internal/shared-data';
import { MakeTransferFormComponent } from '@backbase/transfer-journey/internal/ui';
import { AlertModule } from '@backbase/ui-ang/alert';
import { LoadingIndicatorModule } from '@backbase/ui-ang/loading-indicator';

import { Tracker } from '@backbase/foundation-ang/observability';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'make-transfer-view.component.html',
  imports: [
    NgIf,
    NgSwitchCase,
    AsyncPipe,
    NgSwitch,
    AlertModule,
    MakeTransferFormComponent,
    LoadingIndicatorModule,
  ],
})
export class MakeTransferViewComponent {
  readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly router: Router = inject(Router);
  readonly transferStore: MakeTransferJourneyState = inject(
    MakeTransferJourneyState
  );
  readonly permissions: MakeTransferPermissionsService = inject(
    MakeTransferPermissionsService
  );
  readonly config: MakeTransferJourneyConfiguration = inject(
    MakeTransferJourneyConfiguration
  );
  readonly tracker: Tracker | null = inject(Tracker, {
    optional: true,
  });

  vm$ = this.transferStore.vm$;
  limit$ = this.permissions.unlimitedAmountPerTransaction$.pipe(
    map((resolve) => (!resolve ? this.config.maxTransactionAmount : 0))
  );
  errorAlert$: Observable<ErrorStatus> | null = this.vm$.pipe(
    map((data) => data.errorStatus)
  );

  submitTransfer(transfer: Transfer | undefined): void {
    if (transfer !== undefined) {
      this.tracker?.publish(new TransferSubmitEvent({}));
      this.transferStore.next(transfer);
      this.router.navigate(['../make-transfer-summary'], {
        relativeTo: this.route,
        skipLocationChange: true,
        state: {
          transfer,
        },
      });
    }
  }

  isLoading(status: TransferLoadingStatus) {
    return status === TransferLoadingStatus.LOADING;
  }

  hideErrorAlert(): void {
    this.errorAlert$ = null;
  }

  constructor() {
    this.transferStore.loadAccounts();
  }
}
