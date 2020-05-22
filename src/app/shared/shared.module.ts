import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartupImgComponent} from './components/startup-img/startup-img.component';
import {IonicModule} from '@ionic/angular';


const COMPONENTS = [
    StartupImgComponent
];
const MODULES = [
    IonicModule
];
@NgModule({
    imports: [
        CommonModule,
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [CommonModule , ...COMPONENTS , ...MODULES],
})
export class SharedModule {
}
