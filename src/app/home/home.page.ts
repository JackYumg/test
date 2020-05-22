import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HomeService} from './home.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HttpClient]
})
export class HomePage implements OnInit, AfterContentInit {
  images: any[] = [];

  constructor(
      private homeService: HomeService,
      private sanitizer: DomSanitizer
  ) {

  }
  ngAfterContentInit(): void {
  }

  ngOnInit() {
    this.getImages();
  }

  palyVideo() {
  }

  openMenus() {
  }

  getImages() {
    this.images = this.homeService.getImages().map((img) => {
      const url: any = this.sanitizer.bypassSecurityTrustResourceUrl(img.url);
      img.style = {
        background: `url(${url.changingThisBreaksApplicationSecurity})`,
        backgroundSize: 'cover'
      };
      return img;
    });
  }

}
