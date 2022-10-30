import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DicessrvService {
  dices = [
    {'valeur': 0 , 'img': './assets/DicesImg/special_0.png'},
    {'valeur': 1 , 'img': './assets/DicesImg/special_1.png'},
    {'valeur': 2 , 'img': './assets/DicesImg/special_2.png'},
    {'valeur': 3 , 'img': './assets/DicesImg/special_3.png'},
    {'valeur': 4 , 'img': './assets/DicesImg/special_4.png'},
    {'valeur': 5 , 'img': './assets/DicesImg/special_5.png'},
    {'valeur': 6 , 'img': './assets/DicesImg/special_6.png'}
  ];

  constructor() { }

  getDices(){
    return this.dices;
  }
}
