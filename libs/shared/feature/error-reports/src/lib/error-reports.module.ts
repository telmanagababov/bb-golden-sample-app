import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorReportsComponent } from './components/error-reports/error-reports.component';
import { ModalModule } from '@backbase/ui-ang/modal';
import { TabsModule } from '@backbase/ui-ang/tabs';
import { TableModule } from '@backbase/ui-ang/table';
import { IconModule } from '@backbase/ui-ang/icon';
import { HeadingModule } from '@backbase/ui-ang/heading';
import { AmountModule } from '@backbase/ui-ang/amount';
import { PaginationModule } from '@backbase/ui-ang/pagination';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    TabsModule,
    TableModule,
    IconModule,
    HeadingModule,
    AmountModule,
    PaginationModule,
  ],
  declarations: [ErrorReportsComponent],
  exports: [ErrorReportsComponent],
})
export class ErrorReportsModule {}