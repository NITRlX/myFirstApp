import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, FormControl, FormGroup, } from '@angular/forms';
import { Validators } from '@angular/forms';
import { minDateValidator } from '../min-date.validator';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit {

  movieForm = this.fb.group({

      id: new FormControl(''),
      titre: new FormControl(''),

    type: new FormControl(''),
    annee: new FormControl(''),
    fiche: new FormControl(''),
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.movieForm.value);
  }

}

