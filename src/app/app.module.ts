import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  LyHammerGestureConfig,
  LyThemeModule,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2,
  PartialThemeVariables,
} from '@alyle/ui';
import { color } from '@alyle/ui/color';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { LayoutModule } from './layout/layout.module';

/**
 * For light theme
 * Theme name = minima-light
 */
export class CustomMinimaLight implements PartialThemeVariables {
  name = 'minima-light';
  primary = {
    default: color(0x3c6070),
    contrast: color(0xffffff),
  };
  accent = {
    default: color(0x703c60),
    contrast: color(0xffffff),
  };
  secondary = {
    default: color(0x3c7066),
    contrast: color(0xffffff),
  };
  success = {
    default: color(0x8de88c),
    contrast: color(0x000000),
  };
  info = {
    default: color(0x28e0ef),
    contrast: color(0x000000),
  };
  warning = {
    default: color(0xffae48),
    contrast: color(0x000000),
  };
  error = {
    default: color(0xff6060),
    contrast: color(0x000000),
  };
}

/**
 * For dark theme
 * Theme name = minima-dark
 */
export class CustomMinimaDark implements PartialThemeVariables {
  name = 'minima-dark';
  primary = {
    default: color(0x1a888e),
    contrast: color(0xffffff),
  };
  accent = {
    default: color(0x1a4e8e),
    contrast: color(0xffffff),
  };
  secondary = {
    default: color(0x8a8c61),
    contrast: color(0x000000),
  };
  success = {
    default: color(0x4caf50),
    contrast: color(0x000000),
  };
  info = {
    default: color(0x2196f3),
    contrast: color(0x000000),
  };
  warning = {
    default: color(0xfb8c00),
    contrast: color(0x000000),
  };
  error = {
    default: color(0xff5252),
    contrast: color(0x000000),
  };
}

export function themeNameProviderFactory(): string {
  if (typeof localStorage === 'object') {
    const themeName = localStorage.getItem('theme-name');
    if (themeName) {
      return themeName;
    }
  }

  // Default theme
  return 'minima-light';
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    AngularFireModule.initializeApp(environment.firebase),
    LayoutModule,
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME_NAME, useFactory: themeNameProviderFactory },
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true }, // name minima-light
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true }, // name minima-dark
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
