import { Component, OnInit } from '@angular/core';
import { OmdbItem } from "./omdb";
import { OmdbService } from "../services/omdb.service";


@Component({
  selector: 'app-omdb-list',
  templateUrl: './omdb-list.component.html',
  styleUrls: ['./omdb-list.component.css']
})
export class OmdbListComponent implements OnInit {
  private omdbList: OmdbItem[];
  private omdbViewList: OmdbItem[][];
  private omdbService: OmdbService;
  private total: number;
  private searchValue: string;
  private oldSearchValue: string;
  private currentPage: number;

  constructor(_omdbService: OmdbService) {
    this.omdbService = _omdbService;
  }

  private resetFields() {
    this.omdbList = [];
    this.omdbViewList = [];
    this.total = 0;
    this.currentPage = 0;
  }

  ngOnInit() {
    this.resetFields();
  }

  renderList() {
    // initialize
    this.omdbList = [];
    this.omdbViewList = [];
    if (this.searchValue !== this.oldSearchValue) {
      this.oldSearchValue = this.searchValue;
      this.currentPage = 0;
    }
    if (!this.searchValue || this.searchValue.length === 0){
      this.total = 0;
      return;
    }
    // fetch data
    this.omdbService.searchMovie(this.searchValue, ++this.currentPage)
      .then((response) => {
        this.omdbList = response.Search;
        this.total = parseInt(response.totalResults);
        let rowItems = []; // temp
        let counter = 0;
        this.omdbList.forEach((item, index) => {
          ++counter;
          rowItems.push(item);
          // push every 4 items, til the end
          if (counter === 4 || index === (this.omdbList.length - 1)) { 
            this.omdbViewList.push(rowItems);
            rowItems = []; // reset
            counter = 0;
          }
        });
      })
      .catch((error) => {
        alert("Something happened. " + error.toString());
      });
  }
}
