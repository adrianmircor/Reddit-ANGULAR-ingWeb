import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class')
  cssClass = 'row';

  @Input()
  // sr. TypeScript, trate esto como una propiedad requerida, pero no valide su inicialización.
  // sr. TypeScript, confie 😎
  article!: Article;

  constructor() {

  }

  ngOnInit(): void {
  }

  // 1°Que retorne boolean, permite la etiqueta <a>, que contiene hrefm, no recargue
  // 2°article.component.ts no debe afectar de forma DIRECTA las propeidades de article,
  // esa modificacion solo lo debe hacer article.model.ts
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
