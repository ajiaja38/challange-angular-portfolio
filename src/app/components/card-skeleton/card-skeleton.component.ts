import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'card-skeleton',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './card-skeleton.component.html',
})
export class CardSkeletonComponent {}
