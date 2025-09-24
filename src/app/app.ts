import { Component, signal } from '@angular/core';
import { Banner } from './components/banner/banner';
import { FormNewTransactionComponent } from "./components/form-new-transaction/form-new-transaction.component";

@Component({
  selector: 'app-root',
  imports: [
    Banner,
    FormNewTransactionComponent
],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anybank');
}
