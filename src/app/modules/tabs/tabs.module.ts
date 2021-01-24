import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab/tab-content.component';
import { TabTitleComponent } from './tab/tab-title.component';
import { TabsService } from './tabs.service';

const components = [TabsComponent, TabComponent, TabContentComponent, TabTitleComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule
  ],
  providers: [TabsService],
})
export class TabsModule { }
