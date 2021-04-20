import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { LoanFormComponent } from './loan-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { LoanDialogComponent } from '../loan-dialog/loan-dialog.component';


describe('FormLoanComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, MatFormFieldModule, MatDialogModule, MatSelectModule, MatInputModule ],
      declarations: [ LoanFormComponent, LoanDialogComponent ],
      providers: [ MatDialogRef, FormBuilder, FormGroup ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

  /*

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

  */
  
});


/*
 Now try to test field values
Like should be greater than 50000
Should be greater than 2000000
*/