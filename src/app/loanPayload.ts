export interface ILoanPayload {
    monthlyIncome: number;
    requestedAmount: number;
    loanTerm: number;
    children: string;
    coapplicant: string;
};

// Montly Income of a customer. MIN: 50000
// Requesting. MIN: 20000000
// LoanTerm. in months. MIN: 36. MAX:360
// Children Option NONE, SINGLE, MULTIPLE
// coapplicant NONE | SINGLE_BORROWER | MULTIPLE_BORROWERS