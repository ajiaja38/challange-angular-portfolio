import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JumbotronComponent, AboutComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
