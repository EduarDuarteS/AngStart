import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges{
  @Input() rating: number=4;
  starWidth: number;
  @Output() infoRating: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges():void{
    this.starWidth = this.rating * 75 / 5;
  }

  onClick():void{
    this.infoRating.emit(`este es el rating: ${this.rating}`)
  }
}
