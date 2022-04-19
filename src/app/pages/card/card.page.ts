import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  data=[
    {
      name:'primary',
      selected:false
    },
    {
      name:'secondary',
      selected:true
    },
    {
      name:'tertiary',
      selected:false
    },
    {
      name:'success',
      selected:true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
