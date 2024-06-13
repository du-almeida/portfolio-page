import { Component, signal, inject} from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})



export class ProjectsComponent {
  #dialog = inject(MatDialog);
  
 public arrayProjects = signal<IProjects[]>([
 {
    src: 'assets/img/projects/Login.png',
    alt: 'Projeto Tela de Login',
    title: 'Tela de Login',
    width: '150px',
    height: '150px',
    description: '<p>Meu 1º projeto desenvolvido, onde usei HTML, CSS</p>',
    links:[
      {
        name: 'VER PROJETO',
        href: 'https://6666392900616e30e93c52a7--page-login-register.netlify.app/'
      }
    ]

     
  },

  {
    src: 'assets/img/projects/Calculadora.png',
    alt: 'Projeto Calculadora',
    title: 'Calculadora',
    width: '150px',
    height: '150px',
    description: '<p>Meu 2º projeto desenvolvido, onde usei HTML, CSS e JavaScript</p>',
    links:[
      {
        name: 'VER PROJETO',
        href: 'https://du-almeida.github.io/Calculadora/'
      }
    ]

     
  },


  {
    src: 'src/assets/img/projects/game.png,
    alt: 'Projeto Jogo da Cobrinha',
    title: 'Jogo Snake',
    width: '150px',
    height: '150px',
    description: '<p>Projeto onde pude explorar um pouco mais o JavaScript, desenvolvido junto com HTML e CSS</p>',
    links:[
      {
        name: 'VER PROJETO',
        href: 'https://du-almeida.github.io/game-snake/'
      }
    ]

     
  },

  {
    src: 'assets/img/projects/to-do list.png',
    alt: 'Projeto to-do-list',
    title: 'Lista de Tarefas',
    width: '150px',
    height: '150px',
    description: '<p>Este é meu 2º projeto desenvolvido com Angular</p>',
    links:[
      {
        name: 'VER PROJETO',
        href: 'https://du-almeida.github.io/to-do-list/'
      }
    ]

     
  }

 ]);
 
 public openDialog(data: IProjects){

  this.#dialog.open(DialogProjectsComponent,{
    data,
    panelClass: EDialogPanelClass.PROJECTS
  })
 }
 
}
