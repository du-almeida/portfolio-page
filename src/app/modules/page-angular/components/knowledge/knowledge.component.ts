import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal <Iknowledge[]>([
  {
    src:'assets/icons/knowledge/html5.svg',
    alt: 'icone de conhecimento html5'
  },

  {
    src:'assets/icons/knowledge/css3.svg',
    alt: 'icone de conhecimento css3'
  },
  {
    src:'assets/icons/knowledge/javascript.svg',
    alt: 'icone de conhecimento javascript'
  },
  {
    src:'assets/icons/knowledge/angular.svg',
    alt: 'icone de conhecimento angular'
  },
])
}
