import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPageModule } from '../news/news.module';
import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
