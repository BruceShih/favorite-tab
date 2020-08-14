import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkManagerComponent } from './bookmarks/bookmark-manager/bookmark-manager.component';

@NgModule({
  declarations: [BookmarkManagerComponent],
  imports: [CommonModule],
  exports: [BookmarkManagerComponent]
})
export class ComponentsModule {}
