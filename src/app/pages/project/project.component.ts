import { Component } from '@angular/core';
import { IProject } from '../../interface/project.interface';
import { ProjectService } from '../../services/project.service';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { DialogModule } from 'primeng/dialog';
import { CardSkeletonComponent } from '../../components/card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardProjectComponent, DialogModule, CardSkeletonComponent],
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  projects: IProject[] = [];
  visible: boolean = false;
  projectDetail: IProject = {
    name: '',
    imageUrl: '',
    description: '',
  };

  constructor(private readonly projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  getProjectDetail(project: IProject) {
    this.projectDetail = project;
  }

  setDetailVisible($event: boolean) {
    this.visible = $event;
  }
}
