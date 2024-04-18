import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
