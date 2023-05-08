import { dataMock } from '../../../data/dataMock';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  contentPhoto: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string | null) {
    const result: {
      id: string,
      photo: string,
      title: string,
      description: string } = dataMock.filter( value => id === value.id)[0]

    this.contentPhoto = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;

  }

}
