import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOutputsComponent } from './investment-outputs.component';

describe('InvestmentOutputsComponent', () => {
  let component: InvestmentOutputsComponent;
  let fixture: ComponentFixture<InvestmentOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentOutputsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
