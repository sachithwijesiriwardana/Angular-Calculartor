import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investmentnput } from '../investment-DataInput.model';
import { InvestmentService } from '../investment-outputs/investment.service';

@Component({
  selector: 'app-user-input',

  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<Investmentnput>();

  intitailEnteredValue = '0';
  investmentYearly = '0';
  exReturn = '5';
  exduration = '10';

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.intitailEnteredValue,
      duration: +this.exduration,
      expectedReturn: +this.exReturn,
      annualInvestment: +this.investmentYearly,
    });
    this.intitailEnteredValue = '0';
    this.investmentYearly = '0';
    this.exduration = '5';
    this.exduration = '10';
  }
}
