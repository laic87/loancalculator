import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanDialogComponent } from './loan-dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('LoanDialogComponent', () => {
  let component: LoanDialogComponent;
  let fixture: ComponentFixture<LoanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDialogComponent ],
      imports: [ MatDialogModule ],
      providers: [ MatDialogRef, MAT_DIALOG_DATA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

});
