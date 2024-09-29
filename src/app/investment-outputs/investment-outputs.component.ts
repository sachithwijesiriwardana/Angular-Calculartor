import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-outputs',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-outputs.component.html',
  styleUrl: './investment-outputs.component.css',
})
export class InvestmentOutputsComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
