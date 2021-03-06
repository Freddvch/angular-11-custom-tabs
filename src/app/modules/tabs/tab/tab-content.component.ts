import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabContentComponent {}
