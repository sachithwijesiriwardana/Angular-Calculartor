import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { Investmentnput } from './investment-DataInput.model';
import { InvestmentOutputsComponent } from './investment-outputs/investment-outputs.component';

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentOutputsComponent],
})
export class AppComponent {
  resultsData?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
