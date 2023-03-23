import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAuthenComponent } from './seller-authen.component';

describe('SellerAuthenComponent', () => {
  let component: SellerAuthenComponent;
  let fixture: ComponentFixture<SellerAuthenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAuthenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAuthenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
