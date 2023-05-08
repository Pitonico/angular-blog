import { Component } from '@angular/core';
import { dataMock } from '../../../data/dataMock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    cardsList: {
      id: string,
      photo: string,
      title: string,
      description: string,
    }[];

    cardsList2: {
      id: string,
      photo: string,
      title: string,
      description: string,
    }[];

    constructor(){
      this.cardsList = dataMock.filter(data => data.id != '1');
      this.cardsList2 = dataMock.filter(data => data.id == '1');
    }
}
