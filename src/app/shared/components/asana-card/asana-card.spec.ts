import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsanaCard } from './asana-card';

describe('AsanaCard', () => {
  let component: AsanaCard;
  let fixture: ComponentFixture<AsanaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsanaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsanaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
