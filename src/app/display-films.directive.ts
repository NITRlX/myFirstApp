import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayFilms]'
})

export class DisplayFilmsDirective {

  showMovies = true; // valeur a modifier pour afficher / masquer la liste de films //

@Input() set appDisplayFilms(condition: boolean) {
  if (this.showMovies === true) {
    this.vwRef.createEmbeddedView(this.tplRef);
  } else {
    this.vwRef.clear();
  }
}

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }



}
