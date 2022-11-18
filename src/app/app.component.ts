import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * ElementRef est un wrapper autour d'un élément natif à l'intérieur d'une vue.
   */

  /**
   * ElementRef => Risque de sécurité
   *   Autoriser l'accès direct au DOM peut rendre votre application plus vulnérable aux attaques XSS
   */

  /**
   * Décorateur de propriété qui configure une requête de vue
   */
  @ViewChild('paragraphe') paragraphe: ElementRef;
  @ViewChild('myTemplate') myTemplate: ElementRef;

  constructor() {
    console.log('constructor ', AppComponent.name);
    console.log(this.paragraphe);
  }

  ngOnInit(): void {
    console.log('OnInit ', AppComponent.name);
    console.log(this.paragraphe);
  }

  /*
  Un hook de cycle de vie qui est appelé après qu'Angular ait complètement initialisé la vue d'un composant. 
  */
  ngAfterViewInit() {
    /**
     * NB:
     * Avoid directly interacting with the DOM and instead use Angular templates where possible
     */
    console.log('AfterViewInit ', AppComponent.name);
    this.paragraphe.nativeElement.style = 'color:green';
    this.paragraphe.nativeElement.innerHTML += ' after view init';
    console.log(this.paragraphe);

    console.log(this.myTemplate.nativeElement);
  }
}
