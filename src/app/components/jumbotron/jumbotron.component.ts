import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './jumbotron.component.html',
})
export class JumbotronComponent {
  constructor(private readonly viewportScroller: ViewportScroller) {}

  scrollToElement(): void {
    this.viewportScroller.scrollToAnchor('about');
  }
}
