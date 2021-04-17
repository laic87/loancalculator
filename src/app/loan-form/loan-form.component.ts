import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ILoanPayload } from '../loanPayload';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {

  loanForm: FormGroup;

  calculated = false;
  response = {
    interestRate: 0,
    loanAmount: 0
  };

  fields = [];

  errorMessage: {};
  payload: ILoanPayload;

  // Create ENUM for these rather than declaring here
  childrens = ["NONE", "SINGLE", "MULTIPLE"];
  loaners = ["NONE", "SINGLE_BORROWER", "MULTIPLE_BORROWERS"];

  constructor(
      private formBuilder: FormBuilder,
      private apiService: ApiService
    ) {}


    // <use declared enum for default value instaed of hard code
  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      monthlyIncome: ["", [Validators.required, Validators.minLength(400)]],
      requestedAmount: ["", [Validators.required, Validators.minLength(500)]],
      loanTerm: ["", [Validators.required, Validators.minLength(500)]],
      children: new FormControl(this.childrens[0]),
      coapplicant: new FormControl(this.loaners[0])
    })
  }

  get getControl() {
    return this.loanForm.controls;
  }

  get children() {
    return this.loanForm.get('children');
  }

  changeChildren(event: any) {
    this.children.setValue(event.target.value, {
      onlySelf: true
    })
  }

  // FIx the name according to field 
  get COApplicant() {
    return this.loanForm.get('coapplicant');
  }

  changeCOApplicant(event: any) {
    this.COApplicant.setValue(event.target.value, {
      onlySelf: true
    })
  }

  onSubmit(): void {

    // <try to get whole interface object rather than this
    this.payload =  {
      monthlyIncome: Number(this.calculation(this.loanForm.controls.monthlyIncome.value)),
      requestedAmount: Number(this.calculation(this.loanForm.controls.requestedAmount.value)),
      loanTerm: Number(this.loanForm.controls.loanTerm.value),
      children: String(this.loanForm.controls.children.value),
      coapplicant: String(this.loanForm.controls.coapplicant.value)
    };

    
    this.apiService.requestLoan(this.payload).subscribe({
      next: data => {
        this.response = data;
        this.calculated = true;
        console.log(this.response);
      },
      error: err => {
        this.calculated = false;
        console.log(err);
        this.fields = err;
      }
    });

  }

  calculation(num: number): string {
    return String(num);
  }
}
