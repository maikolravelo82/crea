import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearformComponent } from './crearform.component';

describe('CrearformComponent', () => {
  let component: CrearformComponent;
  let fixture: ComponentFixture<CrearformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearformComponent]
    });
    fixture = TestBed.createComponent(CrearformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
