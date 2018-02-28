import { Component, OnInit } from '@angular/core';
import { Appel } from '../appel';
import { Interpel } from '../interpel';
import { Policier } from '../policier';
import { Surplace } from '../surplace';





@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = new Date();

  policiers :Policier[] = [

  ];

  nom_policier :string;
  prenom_policier :string;
  grade_policier :string = "GPX";

  ajouter_policier()
  {
    this.policiers.push({
      nom: this.nom_policier,
      prenom: this.prenom_policier,
      grade: this.grade_policier
    });

    this.reset_policier();
    //this.tri_policiers();
  }

  supprimer_policier(id_policier)
  {
    this.policiers.splice(id_policier, 1);
  }

  modifier_policier(id_policier)
  {
    this.nom_policier = this.policiers[id_policier].nom;
    this.prenom_policier = this.policiers[id_policier].prenom;
    this.grade_policier = this.policiers[id_policier].grade;

    this.supprimer_policier(id_policier);
  }

  reset_policier()
  {
    this.nom_policier = "";
    this.prenom_policier = "";
    this.grade_policier = "GPX";
  }

  appel :Appel = {
    appelant : "TNF",
    heure : '',
    lieu : '',
    nb_baigneurs : 1,
    nom_vedette : ''
  };

  surplace :Surplace = {
    heure : '',
    lieu : '',
    nb_baigneurs : 1
  };

  interpels :Interpel[] = [

  ];

  type_doc_interpel :string = "Carte d'identité";
  nom_interpel :string;
  prenom_interpel :string;
  date_naissance_interpel :string;
  lieu_naissance_interpel : string;
  tel_interpel :string;
  adresse_interpel :string;
  ville_interpel :string;
  code_interpel :string;
  recherche_interpel :boolean;
  //infos_recherche :string;

  ajouter_interpel() {
      this.interpels.push({
      type_doc : this.type_doc_interpel,
      nom : this.nom_interpel,
      prenom : this.prenom_interpel,
      date_naissance : this.date_naissance_interpel,
      lieu_naissance : this.lieu_naissance_interpel,
      tel : this.tel_interpel,
      adresse : this.adresse_interpel,
      ville : this.ville_interpel,
      code_postal : this.code_interpel,
      recherche : this.recherche_interpel,


  });
  this.reset_interpel();
}
  supprimer_interpel(id_interpel)
  {
    this.interpels.splice(id_interpel, 1);
  }

  modifier_interpel(id_interpel)
  {
      this.type_doc_interpel = this.interpels[id_interpel].type_doc;
      this.nom_interpel = this.interpels[id_interpel].nom;
      this.prenom_interpel = this.interpels[id_interpel].prenom;
      this.date_naissance_interpel = this.interpels[id_interpel].date_naissance;
      this.lieu_naissance_interpel = this.interpels[id_interpel].lieu_naissance;
      this.tel_interpel = this.interpels[id_interpel].tel;
      this.adresse_interpel = this.interpels[id_interpel].adresse;
      this.ville_interpel = this.interpels[id_interpel].ville;
      this.code_interpel = this.interpels[id_interpel].code_postal;
      this.recherche_interpel = this.interpels[id_interpel].recherche;

      this.supprimer_interpel(id_interpel);
  }

  reset_interpel()
  {
    this.type_doc_interpel = "Carte d'identité";
    this.nom_interpel = '';
    this.prenom_interpel = '';
    this.date_naissance_interpel = '';
    this.lieu_naissance_interpel = '';
    this.tel_interpel = '';
    this.adresse_interpel = '';
    this.ville_interpel = '';
    this.code_interpel = '';
    this.recherche_interpel = false;
  }

  recherche = false;
  test_recherche(rech) {
    this.recherche = rech;
  }

}
