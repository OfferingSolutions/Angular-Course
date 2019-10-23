import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineTemplateComponent } from './inline-template.component';

describe('InlineTemplate', () => {
  let component: InlineTemplateComponent;
  let fixture: ComponentFixture<InlineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTemplateComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplateComponent);
    component = fixture.componentInstance;
  });

  it('should set the name', () => {
    expect(component.name).toBe(undefined);
    fixture.detectChanges(); // Calls NgOnInit()
    expect(component.name).toBe('Fabian');
  });
});
