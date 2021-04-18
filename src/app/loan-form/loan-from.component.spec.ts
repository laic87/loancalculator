import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoanFormComponent } from './loan-form.component';

describe('FormLoanComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule ],
      declarations: [ LoanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test child field default value',() => {
    expect(component.children.value).toBe("NONE");
  })

  it('test coapplicant default value',() => {
    expect(component.COApplicant.value).toBe("NONE");
  })

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const monthlyIncome = compiled.querySelector('input[formControlName="monthlyIncome"]');
    const requestedAmount = compiled.querySelector('input[formControlName="requestedAmount"]');
    const loanTerm = compiled.querySelector('input[formControlName="loanTerm"]');
    expect(monthlyIncome).toBeTruthy();
    expect(requestedAmount).toBeTruthy();
    expect(loanTerm).toBeTruthy();
  });
  
});
