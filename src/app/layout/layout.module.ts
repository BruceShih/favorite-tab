import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LyCommonModule, LyGridModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
