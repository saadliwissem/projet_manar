import { Component, Input } from '@angular/core';
import { Etudiant } from '../etudiant.interface';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  @Input() etudiant: Etudiant = { nom: '', prenom: '', moy_annuelle: 0 };
}
