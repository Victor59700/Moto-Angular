import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMotoComponent } from './card-moto.component';

describe('CardMotoComponent', () => {
  let component: CardMotoComponent;
  let fixture: ComponentFixture<CardMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
