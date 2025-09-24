import { Component, input } from '@angular/core';
import { TransactionComponent } from "./transaction/transaction.component";
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-extract',
  imports: [TransactionComponent],
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.css',
})
export class ExtractComponent {
  transactions = input.required<Transaction[]>();


 }
