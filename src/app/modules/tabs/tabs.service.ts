import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Injectable()
export class TabsService {
  private tabs: TabComponent[] = [];
  private activeTab: TabComponent = null;

  public tabs$ = new BehaviorSubject<TabComponent[]>(this.tabs);
  public activeTab$ = new BehaviorSubject<TabComponent>(this.activeTab);

  public addTab(tab: TabComponent): void {
    this.tabs = [...this.tabs, tab];

    if (!this.activeTab) {
      this.setActive(tab);
    }

    this.emit();
  }

  public removeTab(tab: TabComponent): void {
    const index = this.tabs.indexOf(tab);
    const tabs = [...this.tabs];
    tabs.splice(index, 1);

    this.tabs = tabs;

    if (this.activeTab === tab) {
      this.setActive(this.tabs[0]);
    }

    this.emit();
  }

  public checkActive(tab: TabComponent): boolean {
    return this.activeTab === tab;
  }

  public setActive(tab: TabComponent): void {
    this.activeTab = tab;
    this.activeTab$.next(tab);
  }

  private emit(): void {
    this.tabs$.next(this.tabs);
  }

}
