import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor() {
    }

    getImages() {
        const images: any[] = [
            {name: '', url: 'assets/images/startup/1.jpg'},
            {name: '', url: 'assets/images/startup/2.jpg'},
            {name: '', url: 'assets/images/startup/3.jpg'}
        ];
        return images;
    }
}
