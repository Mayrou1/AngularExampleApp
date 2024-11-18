import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMaterialComponent } from './ajout-material.component';

describe('AjoutMaterialComponent', () => {
  let component: AjoutMaterialComponent;
  let fixture: ComponentFixture<AjoutMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
