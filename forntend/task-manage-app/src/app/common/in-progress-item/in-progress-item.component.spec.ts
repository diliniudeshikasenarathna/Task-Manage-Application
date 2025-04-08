import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressItemComponent } from './in-progress-item.component';

describe('InProgressItemComponent', () => {
  let component: InProgressItemComponent;
  let fixture: ComponentFixture<InProgressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProgressItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
