import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinoApiPage } from './destino-api.page';

describe('DestinoApiPage', () => {
  let component: DestinoApiPage;
  let fixture: ComponentFixture<DestinoApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DestinoApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
