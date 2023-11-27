import { Component } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  etudiants = [
    {
      nom: 'tozri',
      prenom: 'salah',
      moy_annuelle: 13.4,
    },
    {
      nom: 'karoui',
      prenom: 'fatma',
      moy_annuelle: 15.8,
    },
    {
      nom: 'tunsi',
      prenom: 'bayrem',
      moy_annuelle: 8.5,
    },
  ];
}
