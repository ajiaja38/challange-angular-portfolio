import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
