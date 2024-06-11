import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience []>([
    {
      summary: {
        strong: "Estágio em BI",
        p: "Cia Hering | Set 2022 - Set 2023",
      },
      text: "<p> Atuei com consulta em banco de dados BQ criação de dashboard no Qlik Sense e no Looker Studio</p>",
    },

    {
      summary: {
        strong: "Estágio em Front-end",
        p: "Grupo Globo | Set 2023 - Atual",
      },
      text: "<p>Trabalho com desenvolvimento Front-end, atuando na melhoria contínua das plataformas para o pequeno de grande anúnciante no Globo Ads</p> <p>HTML, CSS, JavaScript, Angular</p>",
    },

  ])
}
