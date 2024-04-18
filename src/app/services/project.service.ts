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
    {
      name: 'Website Cloud',
      imageUrl:
        'https://cdn.dribbble.com/userupload/12834052/file/original-fd5eb1cf1a762030dabd0d02ffee4ab5.png?resize=320x240&vertical=center',
      description: 'Website Cloud, website untuk menawarkan jasa cloud hosting',
    },
    {
      name: 'Website Web3 Project',
      imageUrl:
        'https://cdn.dribbble.com/userupload/4847341/file/original-3de2d079cf02fea56908cdd9c4079db3.png?resize=320x240&vertical=center',
      description: 'Website Web3 Project, website untuk menawarkan jasa web3',
    },
    {
      name: 'Model CNN',
      imageUrl:
        'https://cdn.dribbble.com/userupload/9282656/file/original-eb2d85d673d129eaa36edd753af71dea.png?resize=320x240&vertical=center',
      description:
        'Model Machine Learning untuk openCV dan integrasi dengan esp32 cam',
    },
  ];

  constructor() {}

  getProjects(): IProject[] {
    return this.projects;
  }
}
