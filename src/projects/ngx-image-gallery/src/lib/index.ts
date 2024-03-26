import {NgModule} from '@angular/core';
import {ClickOutsideDirective} from './directives/click-outside.directive';
import {MouseWheelDirective} from './directives/mousewheel.directive';

export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
export * from './ngx-image-gallery.conf';

@NgModule({
    declarations: [
        MouseWheelDirective,
        ClickOutsideDirective
    ],
    exports: [
        MouseWheelDirective,
        ClickOutsideDirective
    ]
})
export class NgxImageGalleryModule {
}
