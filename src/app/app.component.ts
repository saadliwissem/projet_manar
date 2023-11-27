import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projet_manar';
  etudiant = [
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
