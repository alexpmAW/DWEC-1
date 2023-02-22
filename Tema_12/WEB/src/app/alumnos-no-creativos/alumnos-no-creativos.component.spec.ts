import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosNoCreativosComponent } from './alumnos-no-creativos.component';

describe('AlumnosNoCreativosComponent', () => {
  let component: AlumnosNoCreativosComponent;
  let fixture: ComponentFixture<AlumnosNoCreativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosNoCreativosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosNoCreativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
