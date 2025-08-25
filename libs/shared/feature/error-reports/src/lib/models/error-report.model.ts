export interface ErrorReportItem {
  index: number;
  type: string; // e.g., 'Duplicate', 'Invalid Amount'
  fromAccountName: string;
  fromAccountNumber: string;
  toAccountName: string;
  toAccountNumber: string;
  executionDate: string;
  amount: {
    value: string;
    currency: string;
  };
}