import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("PRS","/prs"),
    new Menu("QER","/qer"),
    new Menu("QAL","/qal")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
