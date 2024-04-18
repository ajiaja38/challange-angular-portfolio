import { Injectable } from '@angular/core';
import { IProject } from '../interface/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: IProject[] = [
    {
      name: 'Kawal Koruptor',
      imageUrl:
        'https://cdn.dribbble.com/userupload/4050701/file/original-2129b8fcee2bb6053537ed5a08d86dfa.png?resize=320x240&vertical=center',
      description:
        'Kawal Koruptor Website, untuk mencari koruptor yang ingin korupsi',
    },
    {
      name: 'Uniqeu Art Web',
      imageUrl:
        'https://cdn.dribbble.com/userupload/10116417/file/original-80691b4a4b489fdc7a51e4e3e43bfda8.jpg?resize=320x240&vertical=center',
      description: 'Uniqeu Art Web, website untuk flexing kreativitas kamu',
    },
    {
      name: 'Website Agency',
      imageUrl:
        'https://cdn.dribbble.com/userupload/13053989/file/original-0eebe261f939298e48bd373d3eac9870.png?resize=320x240&vertical=center',
      description:
        'Website Agency, website untuk menawarkan jasa digital marketing',
    },
  ];

  constructor() {}

  getProjects(): IProject[] {
    return this.projects;
  }
}
