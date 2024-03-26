import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MouseWheelDirective } from './directives/mousewheel.directive';
import * as i0 from "@angular/core";
export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
export * from './ngx-image-gallery.conf';
export class NgxImageGalleryModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: NgxImageGalleryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.1", ngImport: i0, type: NgxImageGalleryModule, declarations: [MouseWheelDirective,
            ClickOutsideDirective], exports: [MouseWheelDirective,
            ClickOutsideDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: NgxImageGalleryModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: NgxImageGalleryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MouseWheelDirective,
                        ClickOutsideDirective
                    ],
                    exports: [
                        MouseWheelDirective,
                        ClickOutsideDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvamVjdHMvbmd4LWltYWdlLWdhbGxlcnkvc3JjL2xpYi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOztBQUV0RSxjQUFjLDREQUE0RCxDQUFDO0FBQzNFLGNBQWMsc0NBQXNDLENBQUM7QUFDckQsY0FBYyxtQ0FBbUMsQ0FBQztBQUNsRCxjQUFjLDBCQUEwQixDQUFDO0FBWXpDLE1BQU0sT0FBTyxxQkFBcUI7dUdBQXJCLHFCQUFxQjt3R0FBckIscUJBQXFCLGlCQVIxQixtQkFBbUI7WUFDbkIscUJBQXFCLGFBR3JCLG1CQUFtQjtZQUNuQixxQkFBcUI7d0dBR2hCLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFWakMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsbUJBQW1CO3dCQUNuQixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxtQkFBbUI7d0JBQ25CLHFCQUFxQjtxQkFDeEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2xpY2tPdXRzaWRlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb3VzZVdoZWVsRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbW91c2V3aGVlbC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbmd4LWltYWdlLWdhbGxlcnkvbmd4LWltYWdlLWdhbGxlcnkuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvbW91c2V3aGVlbC5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZ3gtaW1hZ2UtZ2FsbGVyeS5jb25mJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTW91c2VXaGVlbERpcmVjdGl2ZSxcbiAgICAgICAgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgICAgIENsaWNrT3V0c2lkZURpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4SW1hZ2VHYWxsZXJ5TW9kdWxlIHtcbn1cbiJdfQ==