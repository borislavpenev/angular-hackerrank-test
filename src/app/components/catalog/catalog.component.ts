import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalogSelected: Catalog;
  currentIndex: number;
  slideAtive = false;
  slideDuration = 3000;
  slideTimer = null;
  catalogs: Array<Catalog> = [
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg'
    },
    {
      thumb: '/assets/images/thumb/white-light-thumb.jpeg',
      image: '/assets/images/white-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/pink-light-thumb.jpeg',
      image: '/assets/images/pink-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg',
    }
  ];

  constructor() {
    this.currentIndex = 0;
    this.catalogSelected = this.catalogs[0];
  }

  ngOnInit() {
   
  }

  selectedCatalog(index: number) {
    this.currentIndex = index;
    this.catalogSelected = this.catalogs[index];
  }

  previousClick() {
    this.currentIndex --;
    if (this.currentIndex < 0) {
      this.currentIndex = this.catalogs.length - 1;
    }
    this.catalogSelected = this.catalogs[this.currentIndex];
  }

  nextClick() {
    this.currentIndex ++;
    if (this.currentIndex === this.catalogs.length) {
      this.currentIndex = 0;
    }
    this.catalogSelected = this.catalogs[this.currentIndex];
  }

  slideChange(checked) {
    if (checked.target.checked) {
      this.slideTimer = setInterval(this.onSlideChange.bind(this), this.slideDuration);
    } else {
      this.resetSlideTimer();
    }
  }

  resetSlideTimer() {
    clearInterval(this.slideTimer);
  }

  onSlideChange = function() {
    this.nextClick()
  }
}


export class Catalog {
  thumb: string;
  image: string;
}
