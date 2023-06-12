import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnChanges {
  @Input() rating: number = 0;
  starWidth: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
}
