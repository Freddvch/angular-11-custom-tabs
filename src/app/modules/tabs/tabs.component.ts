import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TabsService } from './tabs.service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  public tabs$ = this.tabsService.tabs$;
  public activeTab$ = this.tabsService.activeTab$;

  constructor(public readonly tabsService: TabsService) {}

  public trackBy(index: number): number {
    return index;
  }

}
