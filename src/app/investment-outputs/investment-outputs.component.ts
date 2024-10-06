import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-outputs',

  templateUrl: './investment-outputs.component.html',
  styleUrl: './investment-outputs.component.css',
})
export class InvestmentOutputsComponent {
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData;
  }
}
