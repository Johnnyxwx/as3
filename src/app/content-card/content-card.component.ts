import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
    @Input() stuff: Content;
    @Input() index: number;
    @Input() last: boolean;
    @Input() type: string;

    constructor() {

        }


    console(){
        console.log(this.stuff.contentId);
    }
}


