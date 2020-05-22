import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-startup-img',
    templateUrl: './startup-img.component.html',
    styleUrls: ['./startup-img.component.scss'],
})
export class StartupImgComponent implements OnInit {
    @Input()
    images: any[] = [];
    pageShow = true;
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    pageIndexChange($event) {
        console.log($event);
    }

    enter() {
        this.router.navigate(['/note']);
    }
}
