import { Component, OnInit } from '@angular/core';
import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  item: {
    padding: '16px',
    textAlign: 'center',
    background: theme.background.secondary,
    boxShadow: shadowBuilder(1),
    borderRadius: '4px',
    height: '100%',
  },
});

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  constructor(private theme: LyTheme2) {}

  ngOnInit(): void {}
}
