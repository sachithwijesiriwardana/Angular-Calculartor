import { NgModule } from '@angular/core';
import { AppComponent } from './src/app/app.component';
import { HeaderComponent } from './src/app/header/header.component';
import { UserInputComponent } from './src/app/user-input/user-input.component';
import { InvestmentOutputsComponent } from './src/app/investment-outputs/investment-outputs.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentOutputsComponent,
  ],
  imports: [FormsModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
