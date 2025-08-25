import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ErrorReportItem } from '../../models/error-report.model';

@Component({
  selector: 'bb-error-reports',
  templateUrl: './error-reports.component.html',
  styleUrls: ['./error-reports.component.scss'],
  standalone: false,
})
export class ErrorReportsComponent {
  @Input() isOpen = false;
  @Input() title = 'Error report';
  @Input() description = 'The transfers below were excluded from the upload due to errors or warnings.';
  @Input() warnings: ErrorReportItem[] = [
    {
      index: 1,
      type: 'Duplicate',
      fromAccountName: 'Operating Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Apex Innovations',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 1,
      type: 'Duplicate',
      fromAccountName: 'Operating Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Apex Innovations',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 9,
      type: 'Duplicate',
      fromAccountName: 'Operating Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Nexus Systems',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 12,
      type: 'Duplicate',
      fromAccountName: 'Operating Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Nexus Systems',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 15,
      type: 'Duplicate',
      fromAccountName: 'Credit Line Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Summit Capital',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 22,
      type: 'Duplicate',
      fromAccountName: 'Credit Line Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Summit Capital',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 28,
      type: 'Duplicate',
      fromAccountName: 'Credit Line Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Precision Analytics',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 46,
      type: 'Duplicate',
      fromAccountName: 'Credit Line Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Precision Analytics',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 49,
      type: 'Duplicate',
      fromAccountName: 'Credit Line Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Global Ventures LLC',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
    {
      index: 66,
      type: 'Duplicate',
      fromAccountName: 'Credit Line Account',
      fromAccountNumber: '....6438',
      toAccountName: 'Global Ventures LLC',
      toAccountNumber: '987654321098',
      executionDate: '24 Apr 2025',
      amount: { value: '50.00', currency: 'USD' },
    },
  ];
  @Input() errors: ErrorReportItem[] = []; // Placeholder for actual errors

  @Output() close = new EventEmitter<void>();

  activeTab: 'warnings' | 'errors' = 'warnings';
  currentPage = 1;
  itemsPerPage = 10; // Assuming 10 items per page based on screenshot

  modalOptions: NgbModalOptions = {
    size: 'lg',
    centered: true,
    scrollable: true,
    backdrop: 'static',
    keyboard: false,
    ariaLabelledBy: 'error-report-modal-title',
  };

  get displayedItems(): ErrorReportItem[] {
    const data = this.activeTab === 'warnings' ? this.warnings : this.errors;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  get totalItems(): number {
    return this.activeTab === 'warnings' ? this.warnings.length : this.errors.length;
  }

  onClose(): void {
    this.close.emit();
  }

  onTabChange(tab: 'warnings' | 'errors'): void {
    this.activeTab = tab;
    this.currentPage = 1; // Reset to first page when tab changes
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}