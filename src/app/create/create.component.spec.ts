import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CREATEComponent } from './create.component';



describe('CREATEComponent', () => {
  let component: CREATEComponent;
  let fixture: ComponentFixture<CREATEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CREATEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CREATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
