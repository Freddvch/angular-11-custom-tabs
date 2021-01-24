import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { TabTitleComponent } from './tab-title.component';
import { TabContentComponent } from './tab-content.component';
import { TabsService } from '../tabs.service';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnDestroy {
  @ViewChild('titleTemplate', { static: false }) titleTemplate: TemplateRef<TabTitleComponent>;
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<TabContentComponent>;

  get active(): boolean {
    return this.tabsService.checkActive(this);
  }

  constructor(private readonly tabsService: TabsService) {
    this.tabsService.addTab(this);
  }

  public ngOnDestroy(): void {
    this.tabsService.removeTab(this);
  }
}
