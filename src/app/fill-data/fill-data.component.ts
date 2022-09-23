import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-fill-data',
  templateUrl: './fill-data.component.html',
  styleUrls: ['./fill-data.component.css'],
})
export class FillDataComponent implements OnInit {
  public titleItem!: string;
  public dateItem!: string;
  public uploadValue!: string;
  public imgItem!: any;

  cardList: Card[] = [];

  constructor() {}

  ngOnInit(): void {
    if (localStorage['cardList']) {
      this.cardList = JSON.parse(localStorage['cardList']);
    }
  }

  onSaveData() {
    this.cardList.push(new Card(this.titleItem, this.dateItem, this.imgItem));
    localStorage['cardList'] = JSON.stringify(this.cardList);
    this.titleItem = '';
    this.dateItem = '';
    this.uploadValue = '';
  }

  uploadImg(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => (this.imgItem = reader.result);
  }
}
