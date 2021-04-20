import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ILoanPayload } from '../loanPayload';
import { ApiService } from '../services/api.service';

import { MatDialog } from '@angular/material/dialog';

import { parseAmount } from "../shared/utility";

import { LoanDialogComponent } from "../loan-dialog/loan-dialog.component";

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css'],
})
export class LoanFormComponent implements OnInit {

  loanForm: FormGroup;

  calculated = false;

  numberRegEx = /\-?\d*\.?\d{1,2}/;

  response = {
    interestRate: 0,
    loanAmount: 0
  };

  fields = [];

  dialogValue: string;

  errorMessage: {};
  payload: ILoanPayload;

  childrens = ["NONE", "SINGLE", "MULTIPLE"];
  loaners = ["NONE", "SINGLE_BORROWER", "MULTIPLE_BORROWERS"];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      monthlyIncome: ["", [Validators.required, Validators.minLength(500)]],
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

    this.payload = {
      monthlyIncome: parseAmount(this.loanForm.controls.monthlyIncome.value),
      requestedAmount: parseAmount(this.loanForm.controls.requestedAmount.value),
      loanTerm: Number(this.loanForm.controls.loanTerm.value),
      children: String(this.loanForm.controls.children.value),
      coapplicant: String(this.loanForm.controls.coapplicant.value)
    };

    this.apiService.requestLoan(this.payload).subscribe({
      next: data => {
        this.response = data;
        this.calculated = true;
        console.log(this.response);
        this.fields = [];
        this.openDialog();
      },
      error: err => {
        this.calculated = false;
        console.log(err);
        this.fields = err;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoanDialogComponent, {
      width: "450px",
      disableClose: true,
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {
        response: this.response,
        fields: this.fields
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }

  openDialogError(): void {
    const dialogRef = this.dialog.open(LoanDialogComponent, {
      disableClose: true,
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {
        fields: this.fields
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }

}