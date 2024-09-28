import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  intitailEnteredValue = '0';
  investmentYearly = '0';
  exReturn = '5';
  duration = '10';

  onSubmit() {
    console.log(this.intitailEnteredValue);
    console.log(this.investmentYearly);
    console.log(this.duration);
    console.log(this.exReturn);
  }
}
