import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investmentnput } from '../investment-DataInput.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<Investmentnput>();

  intitailEnteredValue = '0';
  investmentYearly = '0';
  exReturn = '5';
  exduration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.intitailEnteredValue,
      duration: +this.exduration,
      expectedReturn: +this.exReturn,
      annualInvestment: +this.investmentYearly,
    });
  }
}
