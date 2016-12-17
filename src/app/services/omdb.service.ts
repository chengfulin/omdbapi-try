import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/Rx"; // missing this, would cause error " Property 'map' does not exist on type 'Observable<Response>' "

import { OmdbResponse } from "../omdb-list/omdb";

@Injectable()
export class OmdbService {
  private omdbApi = "https://www.omdbapi.com/";

  constructor(private http: Http) { }

  searchMovie(searchValue: string, page?: number): Promise<OmdbResponse> {
    page = page || 1;
    return this.http.get(`${this.omdbApi}?type=movie&s=${searchValue}&page=${page}`)
                          .map((response) => {
                            let data = response.json();
                            return data || {};
                          })
                          .toPromise();
  }

}
