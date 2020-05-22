import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartupImgComponent } from './startup-img.component';

describe('StartupImgComponent', () => {
  let component: StartupImgComponent;
  let fixture: ComponentFixture<StartupImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupImgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartupImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
