import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  styleUrls: ['./loan-dialog.component.css'],
})
export class LoanDialogComponent implements OnInit {

  interestRate: number;
  loanAmount: number;
  fields: [];
  calculated = false;
  fromDialog: string;

  constructor(
    public dialogRef: MatDialogRef<LoanDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.interestRate = data.response.interestRate;
    this.loanAmount = data.response.loanAmount;
    this.calculated = data.calculated;
    this.fields = data.fields;

   }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
