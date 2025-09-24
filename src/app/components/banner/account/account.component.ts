import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent { 
  balance = input.required<number>();
}
