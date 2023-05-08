import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input() id: string = '0';
  @Input() cardPhoto: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescripton: string = "";

}
