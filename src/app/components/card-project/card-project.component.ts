import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IProject } from '../../interface/project.interface';

@Component({
  selector: 'card-project',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card-project.component.html',
})
export class CardProjectComponent {
  @Input() name: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Output() dataDetailClick = new EventEmitter<IProject>();
  @Output() detailVisible = new EventEmitter<boolean>();

  onDetailClick(project: IProject) {
    this.dataDetailClick.emit({
      name: project.name,
      imageUrl: project.imageUrl,
      description: project.description,
    });
    this.detailVisible.emit(true);
  }
}
