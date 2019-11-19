import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UPDATEComponent } from './update.component';




describe('UPDATEComponent', () => {
  let component: UPDATEComponent;
  let fixture: ComponentFixture<UPDATEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UPDATEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UPDATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
