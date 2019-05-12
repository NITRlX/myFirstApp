import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, FormControl, FormGroup, } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit {

  movieForm = this.fb.group({
    type: [''],
    annee: ['', Validators.required],
    fiche: [''],
    name: this.fb.group({
      id: [''],
      titre: [''],
    })
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.movieForm.value);
  }

}

