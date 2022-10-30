import { Component, OnInit } from '@angular/core';
import { DicessrvService } from 'src/app/services/dicessrv.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.css']
})
export class DicesComponent implements OnInit {
  // tableau de dès
  dices:any = []
  // dès séléctionnés
  dice1 : any;
  dice2 : any;
  dice3 : any;
  // valeurs des dès joués
  diceValue1 = 0;
  diceValue2 = 0;
  diceValue3 = 0;
  // variables scores
  pointage: any;
  bonus: any;
  totalRoll: any;
  total = 0;
  // variables boutton de réinitialisation
  initMessage='Reinitialiser le pointage';
  promesse: any;
  clique = false;


  constructor(private serviceDices: DicessrvService) { }

  ngOnInit(): void {

    this.dices =this.serviceDices.getDices();
    this.dice1 = this.dices[this.diceValue1];
    this.dice2 = this.dices[this.diceValue2];
    this.dice3 = this.dices[this.diceValue3];
  }

  // Lancer les dés
  lanceLesDes(){
    this.initMessage = 'Reinitialiser le pointage'

    this.diceValue1 = this.diceRool();
    this.diceValue2 = this.diceRool();
    this.diceValue3 = this.diceRool();
    this.dice1 = this.dices[this.diceValue1];
    this.dice2 = this.dices[this.diceValue2];
    this.dice3 = this.dices[this.diceValue3];

    this.pointage = this.diceValue1 + this.diceValue2 + this.diceValue3;
    this.bonus = this.calculBonus(this.diceValue1,this.diceValue2,this.diceValue3);
    this.totalRoll = this.pointage + this.bonus ;
    this.total += this.totalRoll
  }

  // Renitialiser pointage
  rePlay(){
    this.clique = true;
    this.initMessage = 'Reinitialisation en cours'
    this.promesse = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve("Promesse d'initialisation reçue");
        reject("Initialisation rejetée (Erreur)");

      },2000);
    }).then(() =>{
      this.clique = false;
      this.diceValue1 = 0;
      this.diceValue2 = 0;
      this.diceValue3 = 0;
      this.pointage = 0;
      this.bonus = 0;
      this.totalRoll = 0;
      this.total = 0;
      this.dice1 = this.dices[this.diceValue1];
      this.dice2 = this.dices[this.diceValue2];
      this.dice3 = this.dices[this.diceValue3];
      this.initMessage = 'Reinitialisation terminée'
    }).catch(() =>{
      this.clique = false;
      this.initMessage = 'ERREUR'
    });
  }

  // fonction lancer un dès
  diceRool(){
    let diceValue = Math.ceil(Math.random() *6);
    return diceValue
  }

  // calcul du bonus
  calculBonus(val1: number, val2: number, val3: number){
    if(val1 == val2 && val2 == val3){
      return 10
    }
    else if(val1 == val2 || val1 == val3 || val2 == val3){
      return 5
    }
    else{
      return 0
    }
  }
}
