import { Component } from '@angular/core';
import { WelcomeComponent } from "./welcome/welcome.component";
import { AccountComponent } from "./account/account.component";

@Component({
  selector: 'app-banner',
  imports: [
    WelcomeComponent,
    AccountComponent
],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
}
