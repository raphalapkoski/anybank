import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  imports: [
    DatePipe, 
    CurrencyPipe
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionComponent {
  transaction = input.required<Transaction>();
}
