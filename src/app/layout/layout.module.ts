import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';

import { ComponentsModule } from './../components/components.module';

import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LeftComponent, RightComponent, MainComponent],
  imports: [CommonModule, LyCommonModule, LyGridModule, ComponentsModule],
  exports: [MainComponent],
})
export class LayoutModule {}
