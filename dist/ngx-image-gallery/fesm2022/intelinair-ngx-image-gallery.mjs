import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, HostListener, Component, HostBinding, Input, ViewChild, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { assign, debounce } from 'lodash';
import * as i1 from '@angular/platform-browser';

class MouseWheelDirective {
    mouseWheelUp = new EventEmitter();
    mouseWheelDown = new EventEmitter();
    onMouseWheelChrome(event) {
        this.mouseWheelFunc(event);
    }
    onMouseWheelFirefox(event) {
        this.mouseWheelFunc(event);
    }
    onMouseWheelIE(event) {
        this.mouseWheelFunc(event);
    }
    mouseWheelFunc(event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
    static ɵfac = function MouseWheelDirective_Factory(t) { return new (t || MouseWheelDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MouseWheelDirective, selectors: [["", "mouseWheel", ""]], hostBindings: function MouseWheelDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousewheel", function MouseWheelDirective_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheelChrome($event); })("DOMMouseScroll", function MouseWheelDirective_DOMMouseScroll_HostBindingHandler($event) { return ctx.onMouseWheelFirefox($event); })("onmousewheel", function MouseWheelDirective_onmousewheel_HostBindingHandler($event) { return ctx.onMouseWheelIE($event); });
        } }, outputs: { mouseWheelUp: "mouseWheelUp", mouseWheelDown: "mouseWheelDown" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MouseWheelDirective, [{
        type: Directive,
        args: [{ selector: '[mouseWheel]' }]
    }], null, { mouseWheelUp: [{
            type: Output
        }], mouseWheelDown: [{
            type: Output
        }], onMouseWheelChrome: [{
            type: HostListener,
            args: ['mousewheel', ['$event']]
        }], onMouseWheelFirefox: [{
            type: HostListener,
            args: ['DOMMouseScroll', ['$event']]
        }], onMouseWheelIE: [{
            type: HostListener,
            args: ['onmousewheel', ['$event']]
        }] }); })();

const _c0 = ["thumbnails"];
const _c1 = (a0, a1) => ({ top: a0, bottom: a1 });
function NgxImageGalleryComponent_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 17);
    i0.ɵɵlistener("click", function NgxImageGalleryComponent_div_2_img_1_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clickOnImage(ctx_r1.activeImageIndex)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("cursor", ctx_r1.conf.imagePointer ? "pointer" : "default")("border-radius", ctx_r1.conf.imageBorderRadius);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustUrl(image_r3.url), i0.ɵɵsanitizeUrl)("alt", image_r3.altText || "");
} }
function NgxImageGalleryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, NgxImageGalleryComponent_div_2_img_1_Template, 1, 6, "img", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", !ctx_r1.loading && i_r4 == ctx_r1.activeImageIndex);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1, ctx_r1.conf.imageOffset, ctx_r1.conf.imageOffset));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r4 == ctx_r1.activeImageIndex);
} }
function NgxImageGalleryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 19);
    i0.ɵɵelement(2, "circle", 20);
    i0.ɵɵelementStart(3, "circle", 21);
    i0.ɵɵelement(4, "animateTransform", 22)(5, "animate", 23);
    i0.ɵɵelementEnd()()();
} }
function NgxImageGalleryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("padding-bottom", ctx_r1.conf.showThumbnails ? "0px" : "30px");
    i0.ɵɵclassProp("dark", ctx_r1.conf.inline);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.activeImage.title, " ");
} }
function NgxImageGalleryComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function NgxImageGalleryComponent_div_6_div_3_Template_div_click_0_listener() { const i_r6 = i0.ɵɵrestoreView(_r5).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setActiveImage(i_r6)); });
    i0.ɵɵelement(1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", ctx_r1.sanitizer.bypassSecurityTrustStyle("url(" + (image_r7.thumbnailUrl || image_r7.url) + ")"))("margin", ctx_r1.thumbnailMargin)("width", ctx_r1.conf.thumbnailSize + "px")("height", ctx_r1.conf.thumbnailSize + "px");
    i0.ɵɵclassProp("active", i_r6 == ctx_r1.activeImageIndex);
} }
function NgxImageGalleryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25, 0)(2, "div", 26);
    i0.ɵɵtemplate(3, NgxImageGalleryComponent_div_6_div_3_Template, 2, 10, "div", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("margin-left", ctx_r1.thumbnailsScrollerLeftMargin);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.images);
} }
function NgxImageGalleryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵlistener("click", function NgxImageGalleryComponent_div_7_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prev()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dark", ctx_r1.conf.inline)("disabled", ctx_r1.onFirstImage);
} }
function NgxImageGalleryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵlistener("click", function NgxImageGalleryComponent_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dark", ctx_r1.conf.inline)("disabled", ctx_r1.onLastImage);
} }
function NgxImageGalleryComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵelement(1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dark", ctx_r1.conf.inline);
    i0.ɵɵproperty("href", ctx_r1.activeImage.extUrl, i0.ɵɵsanitizeUrl)("target", ctx_r1.activeImage.extUrlTarget || "_blank");
} }
function NgxImageGalleryComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵlistener("click", function NgxImageGalleryComponent_div_11_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelement(1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dark", ctx_r1.conf.inline);
} }
function NgxImageGalleryComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("click", function NgxImageGalleryComponent_div_13_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteImage(ctx_r1.activeImageIndex)); });
    i0.ɵɵelement(1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dark", ctx_r1.conf.inline);
} }
// key codes to react
const KEY_CODES = {
    37: 'LEFT',
    39: 'RIGHT',
    27: 'ESC'
};
// default gallery configuration
const DEFAULT_CONF = {
    imageBorderRadius: '3px',
    imageOffset: '20px',
    imagePointer: false,
    showDeleteControl: false,
    showCloseControl: true,
    showExtUrlControl: true,
    showImageTitle: true,
    showThumbnails: true,
    closeOnEsc: true,
    reactToKeyboard: true,
    reactToMouseWheel: true,
    reactToRightClick: false,
    thumbnailSize: 30,
    backdropColor: 'rgba(13,13,14,0.85)',
    inline: false,
    showArrows: true
};
class NgxImageGalleryComponent {
    sanitizer;
    galleryElem;
    renderer;
    cdRef;
    // gallery opened memory
    opened = false;
    // gallery configuration
    conf = {};
    // gallery images
    images = [];
    // event emmiters
    onOpen = new EventEmitter();
    onClose = new EventEmitter();
    onDelete = new EventEmitter();
    onImageChange = new EventEmitter();
    onImageClicked = new EventEmitter();
    onError = new EventEmitter();
    // thumbnails container
    thumbnailsElem;
    /***************************************************/
    // loading animation memory
    loading = false;
    // current active image index
    activeImageIndex = null;
    // thumbnail margin and scroll position
    thumbnailMargin = '0px 8px';
    thumbnailsScrollerLeftMargin = '0px';
    // active image
    get activeImage() {
        return this.images[this.activeImageIndex];
    }
    // if gallery is on : first image
    get onFirstImage() {
        return this.activeImageIndex == 0;
    }
    // if gallery is on : last image
    get onLastImage() {
        return this.activeImageIndex == (this.images.length - 1);
    }
    // get thumbnails viewport rendering parameters
    get thumbnailsRenderParams() {
        let thumbnailsContainerWidth = this.thumbnailsElem.nativeElement.offsetWidth;
        let thumbnailMargin = 16;
        let thumbnailSize = thumbnailMargin + this.conf.thumbnailSize;
        let thumbnailsInView = Math.floor(thumbnailsContainerWidth / thumbnailSize);
        let extraSpaceInThumbnailsContainer = thumbnailsContainerWidth - (thumbnailsInView * thumbnailSize);
        let extraMargin = extraSpaceInThumbnailsContainer / thumbnailsInView;
        let newThumbnailMargin = thumbnailMargin + extraMargin;
        let newThumbnailSize = newThumbnailMargin + this.conf.thumbnailSize;
        let relativePositionOfActiveImageThumbnailToScroller = thumbnailsInView - (thumbnailsInView - this.activeImageIndex);
        let thumbnailsScrollerLeftMargin;
        if (relativePositionOfActiveImageThumbnailToScroller > thumbnailsInView - 2) {
            var outThumbnails = ((this.activeImageIndex + 1) - thumbnailsInView) + 1;
            if (this.activeImageIndex != (this.images.length - 1)) {
                thumbnailsScrollerLeftMargin = '-' + (newThumbnailSize * outThumbnails) + 'px';
            }
            else {
                thumbnailsScrollerLeftMargin = '-' + (newThumbnailSize * (outThumbnails - 1)) + 'px';
            }
        }
        else {
            thumbnailsScrollerLeftMargin = '0px';
        }
        return {
            thumbnailsInView,
            newThumbnailMargin,
            newThumbnailSize,
            thumbnailsScrollerLeftMargin
        };
    }
    // set gallery configuration
    setGalleryConf(conf) {
        this.conf = assign(DEFAULT_CONF, conf);
    }
    // load image and return promise
    loadImage(index) {
        const galleryImage = this.images[index];
        // check if image is cached
        if (galleryImage._cached) {
            return Promise.resolve(index);
        }
        else {
            return new Promise((resolve, reject) => {
                this.loading = true;
                let image = new Image();
                image.src = galleryImage.url;
                image.onload = () => {
                    this.loading = false;
                    galleryImage._cached = true;
                    resolve(index);
                };
                image.onerror = (error) => {
                    this.loading = false;
                    reject(error);
                };
            });
        }
    }
    // activate image (set active image)
    activateImage(imageIndex) {
        // prevent loading if already loading
        if (this.loading)
            return false;
        // emit event
        this.onImageChange.emit(imageIndex);
        this.loadImage(imageIndex)
            .then(_imageIndex => {
            this.activeImageIndex = _imageIndex;
            // Trigger change detection manually to support ChangeDetectionStrategy.OnPush
            this.cdRef.detectChanges();
            // scroll thumbnails
            setTimeout(() => {
                this.fitThumbnails();
                setTimeout(() => this.scrollThumbnails(), 300);
            });
        })
            .catch(error => {
            console.warn(error);
            this.onError.next(error);
        });
    }
    // adjust thumbnail margin to perfectly fit viewport
    fitThumbnails = debounce(() => {
        // if thumbnails not visible, return false
        if (this.conf.showThumbnails == false)
            return false;
        let thumbnailParams = this.thumbnailsRenderParams;
        this.thumbnailMargin = '0 ' + (thumbnailParams.newThumbnailMargin / 2) + 'px';
    }, 300);
    // scroll thumbnails to perfectly position active image thumbnail in viewport
    scrollThumbnails() {
        // if thumbnails not visible, return false
        if (this.conf.showThumbnails == false)
            return false;
        let thumbnailParams = this.thumbnailsRenderParams;
        this.thumbnailsScrollerLeftMargin = thumbnailParams.thumbnailsScrollerLeftMargin;
    }
    // debounced prev
    debouncedPrev = debounce(() => this.prev(), 100, { 'leading': true, 'trailing': false });
    // debounced next
    debouncedNext = debounce(() => this.next(), 100, { 'leading': true, 'trailing': false });
    /***************************************************/
    constructor(sanitizer, galleryElem, renderer, cdRef) {
        this.sanitizer = sanitizer;
        this.galleryElem = galleryElem;
        this.renderer = renderer;
        this.cdRef = cdRef;
    }
    ngOnInit() {
        // create final gallery configuration
        this.setGalleryConf(this.conf);
        // apply backdrop color
        this.renderer.setStyle(this.galleryElem.nativeElement, 'background-color', this.conf.backdropColor);
        // gallery inline class and auto open
        if (this.conf.inline) {
            this.renderer.addClass(this.galleryElem.nativeElement, 'inline');
            this.open(0);
        }
    }
    ngOnChanges(changes) {
        // when gallery configuration changes
        if (changes.conf && changes.conf.firstChange == false) {
            this.setGalleryConf(changes.conf.currentValue);
            // apply backdrop color
            this.renderer.setStyle(this.galleryElem.nativeElement, 'background-color', this.conf.backdropColor);
            // gallery inline class and auto open
            if ((changes.conf.previousValue.inline != true) && this.conf.inline) {
                this.renderer.addClass(this.galleryElem.nativeElement, 'inline');
                this.open(0);
            }
        }
        // when gallery images changes
        if (changes.images && changes.images.firstChange == false) {
            this.images = changes.images.currentValue;
            if (this.images.length) {
                this.activateImage(0);
            }
        }
    }
    // keyboard event
    onKeyboardInput(event) {
        if (this.conf.reactToKeyboard && this.opened && !this.loading) {
            if (KEY_CODES[event.code] == 'RIGHT') {
                this.next();
            }
            else if (KEY_CODES[event.code] == 'LEFT') {
                this.prev();
            }
            else if ((KEY_CODES[event.code] == 'ESC') && this.conf.closeOnEsc) {
                this.close();
            }
        }
    }
    // window resize event
    onWindowResize(event) {
        if (this.opened && !this.loading) {
            this.fitThumbnails();
            setTimeout(() => this.scrollThumbnails(), 300);
        }
    }
    /***************************************************/
    // open gallery
    open(index = 0) {
        if (this.images.length) {
            this.opened = true;
            // emit event
            this.onOpen.emit(index);
            // activate image at given index
            this.activateImage(index);
        }
        else {
            console.warn('No images provided to ngx-image-gallery!');
        }
    }
    // close gallery
    close() {
        this.opened = false;
        this.activeImageIndex = 0;
        // emit event
        this.onClose.emit();
    }
    // change prev image
    prev() {
        if (this.onFirstImage == false) {
            this.activateImage(this.activeImageIndex - 1);
        }
    }
    // change next image
    next() {
        if (this.onLastImage == false) {
            this.activateImage(this.activeImageIndex + 1);
        }
    }
    // set image (activate)
    setActiveImage(index) {
        this.activateImage(index);
    }
    // delete image
    deleteImage(index) {
        this.onDelete.emit(index);
    }
    // mouse wheel up (prev image)
    mouseWheelUp() {
        if (this.conf.reactToMouseWheel) {
            this.debouncedNext();
        }
    }
    // mouse wheel down (next image)
    mouseWheelDown() {
        if (this.conf.reactToMouseWheel) {
            this.debouncedPrev();
        }
    }
    // click on image
    clickOnImage(index) {
        this.onImageClicked.emit(index);
    }
    // right click on image
    rightClickOnImage(event) {
        event.stopPropagation();
        return this.conf.reactToRightClick;
    }
    static ɵfac = function NgxImageGalleryComponent_Factory(t) { return new (t || NgxImageGalleryComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxImageGalleryComponent, selectors: [["ngx-image-gallery"]], viewQuery: function NgxImageGalleryComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.thumbnailsElem = _t.first);
        } }, hostVars: 2, hostBindings: function NgxImageGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function NgxImageGalleryComponent_keydown_HostBindingHandler($event) { return ctx.onKeyboardInput($event); }, false, i0.ɵɵresolveWindow)("resize", function NgxImageGalleryComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, i0.ɵɵresolveWindow);
        } if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.opened);
        } }, inputs: { conf: "conf", images: "images" }, outputs: { onOpen: "onOpen", onClose: "onClose", onDelete: "onDelete", onImageChange: "onImageChange", onImageClicked: "onImageClicked", onError: "onError" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 9, consts: [["thumbnails", ""], ["mouseWheel", "", 1, "galleria", 3, "mouseWheelDown", "mouseWheelUp", "contextmenu"], [1, "images-container", 3, "swiperight", "swipeleft"], ["class", "image", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "loading-animation", 4, "ngIf"], [1, "info-container"], ["class", "title", 3, "paddingBottom", "dark", 4, "ngIf"], ["class", "thumbnails", 4, "ngIf"], ["class", "control arrow left", 3, "dark", "disabled", "click", 4, "ngIf"], ["class", "control arrow right", 3, "dark", "disabled", "click", 4, "ngIf"], [1, "control", "right-top"], ["class", "ext-url", 3, "dark", "href", "target", 4, "ngIf"], ["class", "close", 3, "dark", "click", 4, "ngIf"], [1, "control", "left-top"], ["class", "delete-img", 3, "dark", "click", 4, "ngIf"], [1, "image", 3, "ngStyle"], [3, "src", "alt", "cursor", "borderRadius", "click", 4, "ngIf"], [3, "click", "src", "alt"], [1, "loading-animation"], ["version", "1.1", "id", "L3", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 100 100", "enable-background", "new 0 0 0 0", 0, "xml", "space", "preserve"], ["fill", "none", "stroke", "#fff", "stroke-width", "4", "cx", "50", "cy", "50", "r", "44", 2, "opacity", "0.5"], ["fill", "#4caf50", "stroke", "#eee", "stroke-width", "3", "cx", "8", "cy", "54", "r", "6"], ["attributeName", "transform", "dur", "2s", "type", "rotate", "from", "0 50 48", "to", "360 50 52", "repeatCount", "indefinite"], ["attributeName", "fill", "begin", "1s", "dur", "16s", "values", "#4caf50; #cddc39; #ff9800; #f44336; #e91e63; #ff5722; #ffeb3b; #4caf50", "repeatCount", "indefinite"], [1, "title"], [1, "thumbnails"], [1, "thumbnails-scroller"], ["class", "thumbnail", 3, "active", "backgroundImage", "margin", "width", "height", "click", 4, "ngFor", "ngForOf"], [1, "thumbnail", 3, "click"], [1, "feedback"], [1, "control", "arrow", "left", 3, "click"], [1, "control", "arrow", "right", 3, "click"], [1, "ext-url", 3, "href", "target"], [1, "close", 3, "click"], [1, "delete-img", 3, "click"]], template: function NgxImageGalleryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵlistener("mouseWheelDown", function NgxImageGalleryComponent_Template_div_mouseWheelDown_0_listener() { return ctx.mouseWheelDown(); })("mouseWheelUp", function NgxImageGalleryComponent_Template_div_mouseWheelUp_0_listener() { return ctx.mouseWheelUp(); })("contextmenu", function NgxImageGalleryComponent_Template_div_contextmenu_0_listener($event) { return ctx.rightClickOnImage($event); });
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵlistener("swiperight", function NgxImageGalleryComponent_Template_div_swiperight_1_listener() { return ctx.prev(); })("swipeleft", function NgxImageGalleryComponent_Template_div_swipeleft_1_listener() { return ctx.next(); });
            i0.ɵɵtemplate(2, NgxImageGalleryComponent_div_2_Template, 2, 7, "div", 3)(3, NgxImageGalleryComponent_div_3_Template, 6, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 5);
            i0.ɵɵtemplate(5, NgxImageGalleryComponent_div_5_Template, 2, 5, "div", 6)(6, NgxImageGalleryComponent_div_6_Template, 4, 3, "div", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, NgxImageGalleryComponent_div_7_Template, 1, 4, "div", 8)(8, NgxImageGalleryComponent_div_8_Template, 1, 4, "div", 9);
            i0.ɵɵelementStart(9, "div", 10);
            i0.ɵɵtemplate(10, NgxImageGalleryComponent_a_10_Template, 2, 4, "a", 11)(11, NgxImageGalleryComponent_div_11_Template, 2, 2, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 13);
            i0.ɵɵtemplate(13, NgxImageGalleryComponent_div_13_Template, 2, 2, "div", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.images);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.images.length == 0 || ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.conf.showImageTitle && !ctx.loading && ctx.activeImage && ctx.activeImage.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.conf.showThumbnails);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.conf.showArrows && ctx.images.length > 1 && !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.conf.showArrows && ctx.images.length > 1 && !ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.conf.showExtUrlControl && ctx.activeImage && ctx.activeImage.extUrl && !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.conf.showCloseControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.conf.showDeleteControl && !ctx.loading);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgStyle, MouseWheelDirective], styles: ["@keyframes _ngcontent-%COMP%_zoomScaleIn{0%{transform:scale(.99);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _ngcontent-%COMP%_thumbShadowAnimation{0%{box-shadow:0 0 3px 2px #ffffff0d}to{box-shadow:0 0 3px 2px #fff3}}@keyframes _ngcontent-%COMP%_clickFeedback1{0%{opacity:1;transform:scale3d(.5,.5,1)}to{opacity:0;transform:scale3d(1.1,1.1,1)}}@keyframes _ngcontent-%COMP%_clickFeedback2{0%{opacity:1;transform:scale3d(.5,.5,1)}50%{opacity:0;transform:scale3d(1.2,1.2,1)}to{opacity:0;transform:scale3d(1.2,1.2,1)}}.feedback[_ngcontent-%COMP%]{position:absolute;z-index:1;inset:0}.feedback[_ngcontent-%COMP%]:before, .feedback[_ngcontent-%COMP%]:after{position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;width:60px;height:60px;border-radius:50%;content:\"\";opacity:0;pointer-events:none;box-shadow:0 0 0 2px #6f94b680}.feedback[_ngcontent-%COMP%]:active:before{animation:_ngcontent-%COMP%_clickFeedback1 .5s forwards}.feedback[_ngcontent-%COMP%]:active:after{animation:_ngcontent-%COMP%_clickFeedback2 .5s forwards}[_nghost-%COMP%]{display:none;position:fixed;z-index:10000;inset:0}.inline[_nghost-%COMP%]{display:block;position:relative;width:100%;height:500px}.active[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%]{position:absolute;inset:0 80px;z-index:1;display:flex;flex-direction:column;animation:_ngcontent-%COMP%_zoomScaleIn .2s 1 forwards}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .images-container[_ngcontent-%COMP%]{flex:1;width:100%;position:relative}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .images-container[_ngcontent-%COMP%] > .image[_ngcontent-%COMP%]{position:absolute;inset:0;display:none}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .images-container[_ngcontent-%COMP%] > .image.active[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .images-container[_ngcontent-%COMP%] > .image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;max-width:100%;max-height:100%;animation:_ngcontent-%COMP%_zoomScaleIn .2s 1 forwards;backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .images-container[_ngcontent-%COMP%] > .loading-animation[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:100;display:flex;justify-content:center;align-items:center}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .images-container[_ngcontent-%COMP%] > .loading-animation[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{flex:none;width:100px;height:100px}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%]{flex:none;width:100%;display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .title[_ngcontent-%COMP%]{padding-top:30px;line-height:1.4;font-size:13px;color:#fff;text-align:center;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .title.dark[_ngcontent-%COMP%]{color:#222}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px;overflow:hidden;white-space:nowrap;width:auto;margin:0 auto;max-width:100%}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%]{white-space:nowrap;transition:all .3s ease}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%] > .thumbnail[_ngcontent-%COMP%]{display:inline-block;border-radius:100%;vertical-align:middle;background-color:#999;opacity:.5;filter:grayscale(100%);background-size:cover;background-position:center top;cursor:pointer;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:none;transition:all .3s ease;backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%] > .thumbnail.active[_ngcontent-%COMP%], [_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%] > .thumbnail[_ngcontent-%COMP%]:hover{filter:grayscale(30%)}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%] > .thumbnail.active[_ngcontent-%COMP%]:after, [_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%] > .thumbnail[_ngcontent-%COMP%]:hover:after{content:\"\";display:block;position:absolute;inset:-3px;border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_thumbShadowAnimation 1s infinite alternate}[_nghost-%COMP%] > .galleria[_ngcontent-%COMP%] > .info-container[_ngcontent-%COMP%] > .thumbnails[_ngcontent-%COMP%]   .thumbnails-scroller[_ngcontent-%COMP%] > .thumbnail.active[_ngcontent-%COMP%]{opacity:1;filter:grayscale(0%)}[_nghost-%COMP%] > .control[_ngcontent-%COMP%]{z-index:20;backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}[_nghost-%COMP%] > .control.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;margin-top:-60px;width:50px;height:50px;background-size:100% 100%;background-repeat:no-repeat;overflow:hidden;cursor:pointer;transition:all .1s ease}[_nghost-%COMP%] > .control.arrow.disabled[_ngcontent-%COMP%]{opacity:.3}[_nghost-%COMP%] > .control.arrow[_ngcontent-%COMP%]:not(.disabled):active{width:60px}[_nghost-%COMP%] > .control.arrow.left[_ngcontent-%COMP%]{left:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDc3LjE3NSA0NzcuMTc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuMTc1IDQ3Ny4xNzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPg0KPGc+DQoJPHBhdGggZD0iTTE0NS4xODgsMjM4LjU3NWwyMTUuNS0yMTUuNWM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMXMtMTMuOC01LjMtMTkuMSwwbC0yMjUuMSwyMjUuMWMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjFsMjI1LjEsMjI1ICAgYzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMUwxNDUuMTg4LDIzOC41NzV6IiBmaWxsPSIjRkZGRkZGIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==)}[_nghost-%COMP%] > .control.arrow.left.dark[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzk5OTk5OSIgZD0iTTE1NS43ODQsMjU1Ljk4NkwzODcuMDEyLDI0Ljc1OWM1LjY4Ny01LjY4Nyw1LjY4Ny0xNC44MDcsMC0yMC40OTRjLTUuNjg4LTUuNjg3LTE0LjgwNy01LjY4Ny0yMC40OTQsMA0KCQlMMTI0Ljk4OSwyNDUuNzkzYy01LjY4Nyw1LjY4Ny01LjY4NywxNC44MDcsMCwyMC40OTRsMjQxLjUyOCwyNDEuNDIxYzIuNzksMi43OSw2LjU0NSw0LjI5MiwxMC4xOTMsNC4yOTINCgkJczcuNDAzLTEuMzk1LDEwLjE5My00LjI5MmM1LjY4Ny01LjY4Nyw1LjY4Ny0xNC44MDcsMC0yMC40OTRMMTU1Ljc4NCwyNTUuOTg2eiIvPg0KPC9nPg0KPC9zdmc+DQo=)}[_nghost-%COMP%] > .control.arrow.right[_ngcontent-%COMP%]{right:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDc3LjE3NSA0NzcuMTc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuMTc1IDQ3Ny4xNzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPg0KPGc+DQoJPHBhdGggZD0iTTM2MC43MzEsMjI5LjA3NWwtMjI1LjEtMjI1LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwcy01LjMsMTMuOCwwLDE5LjFsMjE1LjUsMjE1LjVsLTIxNS41LDIxNS41ICAgYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0YzMuNCwwLDYuOS0xLjMsOS41LTRsMjI1LjEtMjI1LjFDMzY1LjkzMSwyNDIuODc1LDM2NS45MzEsMjM0LjI3NSwzNjAuNzMxLDIyOS4wNzV6ICAgIiBmaWxsPSIjRkZGRkZGIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==)}[_nghost-%COMP%] > .control.arrow.right.dark[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzk5OTk5OSIgZD0iTTM4Ny4wNTgsMjQ1Ljc5M0wxNDUuNTMsNC4yNjVjLTUuNjg3LTUuNjg3LTE0LjgwNy01LjY4Ny0yMC40OTQsMHMtNS42ODcsMTQuODA3LDAsMjAuNDk0bDIzMS4yMjgsMjMxLjIyOA0KCQlMMTI1LjAzNiw0ODcuMjE0Yy01LjY4Nyw1LjY4OC01LjY4NywxNC44MDgsMCwyMC40OTRjMi43OSwyLjc5LDYuNTQ1LDQuMjkyLDEwLjE5Myw0LjI5MmMzLjY0OCwwLDcuNDAzLTEuMzk1LDEwLjE5My00LjI5Mg0KCQlMMzg2Ljk1LDI2Ni4xOEMzOTIuNjM3LDI2MC42MDEsMzkyLjYzNywyNTEuMzczLDM4Ny4wNTgsMjQ1Ljc5M3oiLz4NCjwvZz4NCjwvc3ZnPg0K)}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%]{position:absolute;top:20px}[_nghost-%COMP%] > .control.left-top.left-top[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.right-top.left-top[_ngcontent-%COMP%]{left:10px}[_nghost-%COMP%] > .control.left-top.right-top[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.right-top.right-top[_ngcontent-%COMP%]{right:10px}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url[_ngcontent-%COMP%], [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close[_ngcontent-%COMP%]{position:relative;display:inline-block;width:30px;height:30px;cursor:pointer;text-decoration:none;color:#fff;vertical-align:bottom;transition:background-color .3s ease-in-out}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url[_ngcontent-%COMP%]:hover, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close[_ngcontent-%COMP%]:hover{background-color:#ffffff1a}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;inset:5px;background-size:100% 100%;background-repeat:no-repeat}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img.delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url.delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close.delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img.delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url.delete-img[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close.delete-img[_ngcontent-%COMP%]:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5IDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSA1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01Mi41LDZIMzguNDU2Yy0wLjExLTEuMjUtMC40OTUtMy4zNTgtMS44MTMtNC43MTFDMzUuODA5LDAuNDM0LDM0Ljc1MSwwLDMzLjQ5OSwwSDIzLjVjLTEuMjUyLDAtMi4zMSwwLjQzNC0zLjE0NCwxLjI4OSAgQzE5LjAzOCwyLjY0MiwxOC42NTMsNC43NSwxOC41NDMsNkg2LjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMi4wNDFsMS45MTUsNDYuMDIxQzEwLjQ5Myw1NS43NDMsMTEuNTY1LDU5LDE1LjM2NCw1OSAgaDI4LjI3MmMzLjc5OSwwLDQuODcxLTMuMjU3LDQuOTA3LTQuOTU4TDUwLjQ1OSw4SDUyLjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM1My4wNTIsNiw1Mi41LDZ6IE0yMC41LDUwYzAsMC41NTMtMC40NDgsMS0xLDEgIHMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMXMxLDAuNDQ3LDEsMVY1MHogTTMwLjUsNTBjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMSAgczEsMC40NDcsMSwxVjUweiBNNDAuNSw1MGMwLDAuNTUzLTAuNDQ4LDEtMSwxcy0xLTAuNDQ3LTEtMVYxN2MwLTAuNTUzLDAuNDQ4LTEsMS0xczEsMC40NDcsMSwxVjUweiBNMjEuNzkyLDIuNjgxICBDMjIuMjQsMi4yMjMsMjIuNzk5LDIsMjMuNSwyaDkuOTk5YzAuNzAxLDAsMS4yNiwwLjIyMywxLjcwOCwwLjY4MWMwLjgwNSwwLjgyMywxLjEyOCwyLjI3MSwxLjI0LDMuMzE5SDIwLjU1MyAgQzIwLjY2NSw0Ljk1MiwyMC45ODgsMy41MDQsMjEuNzkyLDIuNjgxeiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img.delete-img.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url.delete-img.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close.delete-img.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img.delete-img.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url.delete-img.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close.delete-img.dark[_ngcontent-%COMP%]:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5IDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSA1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01Mi41LDZIMzguNDU2Yy0wLjExLTEuMjUtMC40OTUtMy4zNTgtMS44MTMtNC43MTFDMzUuODA5LDAuNDM0LDM0Ljc1MSwwLDMzLjQ5OSwwSDIzLjVjLTEuMjUyLDAtMi4zMSwwLjQzNC0zLjE0NCwxLjI4OSAgQzE5LjAzOCwyLjY0MiwxOC42NTMsNC43NSwxOC41NDMsNkg2LjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMi4wNDFsMS45MTUsNDYuMDIxQzEwLjQ5Myw1NS43NDMsMTEuNTY1LDU5LDE1LjM2NCw1OSAgaDI4LjI3MmMzLjc5OSwwLDQuODcxLTMuMjU3LDQuOTA3LTQuOTU4TDUwLjQ1OSw4SDUyLjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM1My4wNTIsNiw1Mi41LDZ6IE0yMC41LDUwYzAsMC41NTMtMC40NDgsMS0xLDEgIHMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMXMxLDAuNDQ3LDEsMVY1MHogTTMwLjUsNTBjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMSAgczEsMC40NDcsMSwxVjUweiBNNDAuNSw1MGMwLDAuNTUzLTAuNDQ4LDEtMSwxcy0xLTAuNDQ3LTEtMVYxN2MwLTAuNTUzLDAuNDQ4LTEsMS0xczEsMC40NDcsMSwxVjUweiBNMjEuNzkyLDIuNjgxICBDMjIuMjQsMi4yMjMsMjIuNzk5LDIsMjMuNSwyaDkuOTk5YzAuNzAxLDAsMS4yNiwwLjIyMywxLjcwOCwwLjY4MWMwLjgwNSwwLjgyMywxLjEyOCwyLjI3MSwxLjI0LDMuMzE5SDIwLjU1MyAgQzIwLjY2NSw0Ljk1MiwyMC45ODgsMy41MDQsMjEuNzkyLDIuNjgxeiIgZmlsbD0iIzk5OTk5OSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img.close[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url.close[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close.close[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img.close[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url.close[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close.close[_ngcontent-%COMP%]:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTJweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0Ij4NCiAgPGc+DQogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI4Ljk0MSwzMS43ODZMMC42MTMsNjAuMTE0Yy0wLjc4NywwLjc4Ny0wLjc4NywyLjA2MiwwLDIuODQ5YzAuMzkzLDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OSAgIGMwLjUxNiwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTlsMjguNTQxLTI4LjU0MWwyOC41NDEsMjguNTQxYzAuMzk0LDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OWMwLjUxNSwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTkgICBjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OUwzNS4wNjQsMzEuNzg2TDYzLjQxLDMuNDM4YzAuNzg3LTAuNzg3LDAuNzg3LTIuMDYyLDAtMi44NDljLTAuNzg3LTAuNzg2LTIuMDYyLTAuNzg2LTIuODQ4LDAgICBMMzIuMDAzLDI5LjE1TDMuNDQxLDAuNTljLTAuNzg3LTAuNzg2LTIuMDYxLTAuNzg2LTIuODQ4LDBjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDlMMjguOTQxLDMxLjc4NnoiLz4NCiAgPC9nPg0KPC9zdmc+DQo=)}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img.close.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url.close.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close.close.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img.close.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url.close.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close.close.dark[_ngcontent-%COMP%]:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik0yMzEuNTI4LDI1NC4yODhMNC45MDQsNDgwLjkxMmMtNi4yOTYsNi4yOTYtNi4yOTYsMTYuNDk2LDAsMjIuNzkyYzMuMTQ0LDMuMTUyLDcuMjcyLDQuNzIsMTEuMzkyLDQuNzINCgkJYzQuMTI4LDAsOC4yNDgtMS41NjcsMTEuMzkyLTQuNzJsMjI4LjMyOC0yMjguMzI4bDIyOC4zMjgsMjI4LjMyOGMzLjE1MiwzLjE1Miw3LjI3Miw0LjcyLDExLjM5Myw0LjcyDQoJCWM0LjExOSwwLDguMjQ4LTEuNTY3LDExLjM5Mi00LjcyYzYuMjk2LTYuMjk2LDYuMjk2LTE2LjQ5NiwwLTIyLjc5MkwyODAuNTEyLDI1NC4yODhMNTA3LjI4LDI3LjUwNA0KCQljNi4yOTYtNi4yOTYsNi4yOTYtMTYuNDk2LDAtMjIuNzkyYy02LjI5Ni02LjI4OC0xNi40OTYtNi4yODgtMjIuNzg0LDBMMjU2LjAyNCwyMzMuMkwyNy41MjgsNC43Mg0KCQljLTYuMjk2LTYuMjg4LTE2LjQ4OC02LjI4OC0yMi43ODQsMGMtNi4yOTYsNi4yOTYtNi4yOTYsMTYuNDk2LDAsMjIuNzkyTDIzMS41MjgsMjU0LjI4OHoiLz4NCjwvZz4NCjwvc3ZnPg0K)}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img.ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url.ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close.ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img.ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url.ext-url[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close.ext-url[_ngcontent-%COMP%]:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTkxLjYgNTkxLjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5MS42IDU5MS42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTgxLjQsMjA0Yy01LjcxMiwwLTEwLjIsNC40ODgtMTAuMiwxMC4ydjMyNi40YzAsMTYuOTMyLTEzLjY2OCwzMC42LTMwLjYsMzAuNkg1MWMtMTYuOTMyLDAtMzAuNi0xMy42NjgtMzAuNi0zMC42VjUxICAgIGMwLTE2LjkzMiwxMy42NjgtMzAuNiwzMC42LTMwLjZoMzI2LjRjNS43MTIsMCwxMC4yLTQuNDg4LDEwLjItMTAuMlMzODMuMTEyLDAsMzc3LjQsMEg1MUMyMi44NDgsMCwwLDIyLjg0OCwwLDUxdjQ4OS42ICAgIGMwLDI4LjE1MiwyMi44NDgsNTEsNTEsNTFoNDg5LjZjMjguMTUyLDAsNTEtMjIuODQ4LDUxLTUxVjIxNC4yQzU5MS42LDIwOC42OTIsNTg2LjkwOCwyMDQsNTgxLjQsMjA0eiIgZmlsbD0iI0ZGRkZGRiIvPg0KCQk8cGF0aCBkPSJNNTkxLjM5Niw4LjE2YzAtMC4yMDQtMC4yMDQtMC42MTItMC4yMDQtMC44MTZjMC0wLjQwOC0wLjIwNC0wLjYxMi0wLjQwOC0xLjAyYy0wLjIwNC0wLjQwOC0wLjQwOC0wLjYxMi0wLjYxMi0xLjAyICAgIGMtMC4yMDQtMC4yMDQtMC4yMDQtMC42MTItMC40MDgtMC44MTZjLTAuODE2LTEuMDItMS42MzItMi4wNC0yLjg1Ni0yLjg1NmMtMC4yMDQtMC4yMDQtMC42MTItMC4yMDQtMC44MTYtMC40MDggICAgYy0wLjQwOC0wLjIwNC0wLjYxMi0wLjQwOC0xLjAyLTAuNjEyYy0wLjQwOC0wLjIwNC0wLjYxMi0wLjIwNC0xLjAyLTAuNDA4Yy0wLjIwNCwwLTAuNjEyLTAuMjA0LTAuODE2LTAuMjA0ICAgIGMtMC42MTIsMC4yMDQtMS4yMjQsMC0xLjgzNiwwbDAsMEg0MzguNmMtNS43MTIsMC0xMC4yLDQuNDg4LTEwLjIsMTAuMnM0LjQ4OCwxMC4yLDEwLjIsMTAuMmgxMTguMTE2bC0zNzAuMjYsMzcwLjI2ICAgIGMtNC4wOCw0LjA4LTQuMDgsMTAuNDA0LDAsMTQuNDg0YzIuMDQsMi4wNCw0LjY5MiwzLjA2LDcuMTQsMy4wNmMyLjQ0OCwwLDUuMzA0LTEuMDIsNy4xNC0zLjA2TDU3MS4yLDM0Ljg4NFYxNTMgICAgYzAsNS43MTIsNC40ODgsMTAuMiwxMC4yLDEwLjJzMTAuMi00LjQ4OCwxMC4yLTEwLjJWMTAuMkM1OTEuNiw5LjU4OCw1OTEuMzk2LDguOTc2LDU5MS4zOTYsOC4xNnoiIGZpbGw9IiNGRkZGRkYiLz4NCgkJPHBhdGggZD0iTTUxLDQ1LjljLTIuODU2LDAtNS4xLDIuMjQ0LTUuMSw1LjF2MTQyLjhjMCwyLjg1NiwyLjI0NCw1LjEsNS4xLDUuMXM1LjEtMi4yNDQsNS4xLTUuMVY1Ni4xaDEzNy43ICAgIGMyLjg1NiwwLDUuMS0yLjI0NCw1LjEtNS4xcy0yLjI0NC01LjEtNS4xLTUuMUg1MXoiIGZpbGw9IiNGRkZGRkYiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==)}[_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .delete-img.ext-url.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .ext-url.ext-url.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.left-top[_ngcontent-%COMP%] > .close.ext-url.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .delete-img.ext-url.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .ext-url.ext-url.dark[_ngcontent-%COMP%]:before, [_nghost-%COMP%] > .control.right-top[_ngcontent-%COMP%] > .close.ext-url.dark[_ngcontent-%COMP%]:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik01MDMuMTczLDE3Ni41NTJjLTQuOTQ0LDAtOC44MjgsMy44ODQtOC44MjgsOC44Mjh2MjgyLjQ4M2MwLDE0LjY1My0xMS44MjksMjYuNDgyLTI2LjQ4MiwyNi40ODJINDQuMTM4DQoJCQljLTE0LjY1MywwLTI2LjQ4Mi0xMS44MjktMjYuNDgyLTI2LjQ4MlY0NC4xMzhjMC0xNC42NTMsMTEuODI5LTI2LjQ4MiwyNi40ODItMjYuNDgyaDI4Mi40ODNjNC45NDMsMCw4LjgyNy0zLjg4NCw4LjgyNy04LjgyOA0KCQkJUzMzMS41NjQsMCwzMjYuNjIxLDBINDQuMTM4QzE5Ljc3NCwwLDAsMTkuNzc0LDAsNDQuMTM4djQyMy43MjVDMCw0OTIuMjI3LDE5Ljc3NCw1MTIsNDQuMTM4LDUxMmg0MjMuNzI1DQoJCQlDNDkyLjIyNyw1MTIsNTEyLDQ5Mi4yMjcsNTEyLDQ2Ny44NjJWMTg1LjM3OUM1MTIsMTgwLjYxMiw1MDcuOTM5LDE3Ni41NTIsNTAzLjE3MywxNzYuNTUyeiIvPg0KCQk8cGF0aCBmaWxsPSIjOTk5OTk5IiBkPSJNNTExLjgyMyw3LjA2MmMwLTAuMTc2LTAuMTc3LTAuNTMtMC4xNzctMC43MDZjMC0wLjM1My0wLjE3Ni0wLjUzLTAuMzUzLTAuODgzcy0wLjM1NC0wLjUzLTAuNTMtMC44ODMNCgkJCWMtMC4xNzYtMC4xNzYtMC4xNzYtMC41My0wLjM1My0wLjcwNmMtMC43MDYtMC44ODMtMS40MTItMS43NjYtMi40NzItMi40NzJjLTAuMTc3LTAuMTc3LTAuNTI5LTAuMTc3LTAuNzA2LTAuMzUzDQoJCQljLTAuMzU0LTAuMTc3LTAuNTMtMC4zNTQtMC44ODMtMC41M2MtMC4zNTQtMC4xNzctMC41My0wLjE3Ny0wLjg4My0wLjM1M2MtMC4xNzcsMC0wLjUzLTAuMTc3LTAuNzA2LTAuMTc3DQoJCQljLTAuNTMsMC4xNzctMS4wNiwwLTEuNTksMGwwLDBIMzc5LjU4NmMtNC45NDMsMC04LjgyNywzLjg4NC04LjgyNyw4LjgyOHMzLjg4NCw4LjgyOCw4LjgyNyw4LjgyOEg0ODEuODFMMTYxLjM2OCwzMzguMDk3DQoJCQljLTMuNTMxLDMuNTMxLTMuNTMxLDkuMDA0LDAsMTIuNTM1YzEuNzY2LDEuNzY2LDQuMDYxLDIuNjQ4LDYuMTc5LDIuNjQ4YzIuMTE5LDAsNC41OS0wLjg4Myw2LjE4LTIuNjQ4TDQ5NC4zNDUsMzAuMTl2MTAyLjIyNA0KCQkJYzAsNC45NDMsMy44ODQsOC44MjcsOC44MjgsOC44MjdjNC45NDMsMCw4LjgyNy0zLjg4NCw4LjgyNy04LjgyN1Y4LjgyOEM1MTIsOC4yOTgsNTExLjgyMyw3Ljc2OCw1MTEuODIzLDcuMDYyeiIvPg0KCQk8cGF0aCBmaWxsPSIjOTk5OTk5IiBkPSJNNDQuMTM4LDM5LjcyNGMtMi40NzIsMC00LjQxNCwxLjk0Mi00LjQxNCw0LjQxNHYxMjMuNTg2YzAsMi40NzIsMS45NDIsNC40MTQsNC40MTQsNC40MTQNCgkJCWMyLjQ3MiwwLDQuNDE0LTEuOTQyLDQuNDE0LTQuNDE0VjQ4LjU1MmgxMTkuMTcyYzIuNDcyLDAsNC40MTQtMS45NDIsNC40MTQtNC40MTRjMC0yLjQ3Mi0xLjk0Mi00LjQxNC00LjQxNC00LjQxNEg0NC4xMzh6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxImageGalleryComponent, [{
        type: Component,
        args: [{ selector: 'ngx-image-gallery', template: "<!-- images and image information container -->\n<div class=\"galleria\" mouseWheel (mouseWheelDown)=\"mouseWheelDown()\" (mouseWheelUp)=\"mouseWheelUp()\"\n     (contextmenu)=\"rightClickOnImage($event)\">\n    <!-- images -->\n    <div class=\"images-container\" (swiperight)=\"prev()\" (swipeleft)=\"next()\">\n        <!-- images array -->\n        <div class=\"image\" *ngFor=\"let image of images; let i = index;\"\n             [class.active]=\"!loading && (i == activeImageIndex)\"\n             [ngStyle]=\"{top: conf.imageOffset, bottom: conf.imageOffset}\">\n            <img *ngIf=\"i == activeImageIndex\" [src]=\"sanitizer.bypassSecurityTrustUrl(image.url)\" [alt]=\"image.altText || ''\"\n                 [style.cursor]=\"conf.imagePointer?  'pointer':'default'\"\n                 [style.borderRadius]=\"conf.imageBorderRadius\" (click)=\"clickOnImage(activeImageIndex)\"/>\n        </div>\n\n        <!-- loading animation -->\n        <div class=\"loading-animation\" *ngIf=\"(images.length == 0) || loading\">\n            <svg  version=\"1.1\" id=\"L3\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\n        <circle fill=\"none\" stroke=\"#fff\" stroke-width=\"4\" cx=\"50\" cy=\"50\" r=\"44\" style=\"opacity:0.5;\"/>\n        <circle fill=\"#4caf50\" stroke=\"#eee\" stroke-width=\"3\" cx=\"8\" cy=\"54\" r=\"6\">\n          <animateTransform\n          attributeName=\"transform\"\n          dur=\"2s\"\n          type=\"rotate\"\n          from=\"0 50 48\"\n          to=\"360 50 52\"\n          repeatCount=\"indefinite\" />\n\n          <animate \n          attributeName=\"fill\" \n          begin=\"1s\" \n          dur=\"16s\" \n          values=\"#4caf50; #cddc39; #ff9800; #f44336; #e91e63; #ff5722; #ffeb3b; #4caf50\"\n          repeatCount=\"indefinite\" /> \n        </circle>\n      </svg>\n        </div>\n    </div>\n\n    <!-- info and thumbnails -->\n    <div class=\"info-container\">\n        <div class=\"title\"\n             *ngIf=\"conf.showImageTitle && !loading && activeImage && activeImage.title\"\n             [style.paddingBottom]=\"conf.showThumbnails ? '0px' : '30px'\"\n             [class.dark]=\"conf.inline\"\n        >{{ activeImage.title }}\n        </div>\n\n        <div #thumbnails class=\"thumbnails\" *ngIf=\"conf.showThumbnails\">\n            <div class=\"thumbnails-scroller\" [style.marginLeft]=\"thumbnailsScrollerLeftMargin\">\n                <div class=\"thumbnail\"\n                     *ngFor=\"let image of images; let i = index;\"\n                     [class.active]=\"i == activeImageIndex\"\n\n                     [style.backgroundImage]=\"sanitizer.bypassSecurityTrustStyle('url(' + (image.thumbnailUrl || image.url) + ')')\"\n\n                     [style.margin]=\"thumbnailMargin\"\n                     [style.width]=\"conf.thumbnailSize + 'px'\"\n                     [style.height]=\"conf.thumbnailSize + 'px'\"\n                     (click)=\"setActiveImage(i)\">\n                    <div class=\"feedback\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- gallery controls -->\n<div class=\"control arrow left\" *ngIf=\"conf.showArrows && (images.length > 1) && !loading\" [class.dark]=\"conf.inline\"\n     [class.disabled]=\"onFirstImage\" (click)=\"prev()\"></div>\n<div class=\"control arrow right\" *ngIf=\"conf.showArrows && (images.length > 1) && !loading\" [class.dark]=\"conf.inline\"\n     [class.disabled]=\"onLastImage\" (click)=\"next()\"></div>\n\n<div class=\"control right-top\">\n    <a class=\"ext-url\" [class.dark]=\"conf.inline\"\n       *ngIf=\"conf.showExtUrlControl && activeImage && activeImage.extUrl && !loading\" [href]=\"activeImage.extUrl\"\n       [target]=\"activeImage.extUrlTarget || '_blank'\">\n        <div class=\"feedback\"></div>\n    </a>\n    <div class=\"close\" [class.dark]=\"conf.inline\" *ngIf=\"conf.showCloseControl\" (click)=\"close()\">\n        <div class=\"feedback\"></div>\n    </div>\n</div>\n\n<div class=\"control left-top\">\n    <div class=\"delete-img\" [class.dark]=\"conf.inline\" *ngIf=\"conf.showDeleteControl && !loading\"\n         (click)=\"deleteImage(activeImageIndex)\">\n        <div class=\"feedback\"></div>\n    </div>\n</div>\n", styles: ["@keyframes zoomScaleIn{0%{transform:scale(.99);opacity:0}to{transform:scale(1);opacity:1}}@keyframes thumbShadowAnimation{0%{box-shadow:0 0 3px 2px #ffffff0d}to{box-shadow:0 0 3px 2px #fff3}}@keyframes clickFeedback1{0%{opacity:1;transform:scale3d(.5,.5,1)}to{opacity:0;transform:scale3d(1.1,1.1,1)}}@keyframes clickFeedback2{0%{opacity:1;transform:scale3d(.5,.5,1)}50%{opacity:0;transform:scale3d(1.2,1.2,1)}to{opacity:0;transform:scale3d(1.2,1.2,1)}}.feedback{position:absolute;z-index:1;inset:0}.feedback:before,.feedback:after{position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;width:60px;height:60px;border-radius:50%;content:\"\";opacity:0;pointer-events:none;box-shadow:0 0 0 2px #6f94b680}.feedback:active:before{animation:clickFeedback1 .5s forwards}.feedback:active:after{animation:clickFeedback2 .5s forwards}:host{display:none;position:fixed;z-index:10000;inset:0}:host.inline{display:block;position:relative;width:100%;height:500px}:host.active{display:block}:host>.galleria{position:absolute;inset:0 80px;z-index:1;display:flex;flex-direction:column;animation:zoomScaleIn .2s 1 forwards}:host>.galleria>.images-container{flex:1;width:100%;position:relative}:host>.galleria>.images-container>.image{position:absolute;inset:0;display:none}:host>.galleria>.images-container>.image.active{display:block}:host>.galleria>.images-container>.image>img{position:absolute;inset:0;margin:auto;max-width:100%;max-height:100%;animation:zoomScaleIn .2s 1 forwards;backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}:host>.galleria>.images-container>.loading-animation{position:absolute;inset:0;z-index:100;display:flex;justify-content:center;align-items:center}:host>.galleria>.images-container>.loading-animation>svg{flex:none;width:100px;height:100px}:host>.galleria>.info-container{flex:none;width:100%;display:flex;flex-direction:column;align-items:center}:host>.galleria>.info-container>.title{padding-top:30px;line-height:1.4;font-size:13px;color:#fff;text-align:center;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}:host>.galleria>.info-container>.title.dark{color:#222}:host>.galleria>.info-container>.thumbnails{padding-top:20px;padding-bottom:20px;overflow:hidden;white-space:nowrap;width:auto;margin:0 auto;max-width:100%}:host>.galleria>.info-container>.thumbnails .thumbnails-scroller{white-space:nowrap;transition:all .3s ease}:host>.galleria>.info-container>.thumbnails .thumbnails-scroller>.thumbnail{display:inline-block;border-radius:100%;vertical-align:middle;background-color:#999;opacity:.5;filter:grayscale(100%);background-size:cover;background-position:center top;cursor:pointer;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:none;transition:all .3s ease;backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}:host>.galleria>.info-container>.thumbnails .thumbnails-scroller>.thumbnail.active,:host>.galleria>.info-container>.thumbnails .thumbnails-scroller>.thumbnail:hover{filter:grayscale(30%)}:host>.galleria>.info-container>.thumbnails .thumbnails-scroller>.thumbnail.active:after,:host>.galleria>.info-container>.thumbnails .thumbnails-scroller>.thumbnail:hover:after{content:\"\";display:block;position:absolute;inset:-3px;border-radius:100%;overflow:hidden;animation:thumbShadowAnimation 1s infinite alternate}:host>.galleria>.info-container>.thumbnails .thumbnails-scroller>.thumbnail.active{opacity:1;filter:grayscale(0%)}:host>.control{z-index:20;backface-visibility:hidden;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}:host>.control.arrow{position:absolute;top:50%;margin-top:-60px;width:50px;height:50px;background-size:100% 100%;background-repeat:no-repeat;overflow:hidden;cursor:pointer;transition:all .1s ease}:host>.control.arrow.disabled{opacity:.3}:host>.control.arrow:not(.disabled):active{width:60px}:host>.control.arrow.left{left:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDc3LjE3NSA0NzcuMTc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuMTc1IDQ3Ny4xNzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPg0KPGc+DQoJPHBhdGggZD0iTTE0NS4xODgsMjM4LjU3NWwyMTUuNS0yMTUuNWM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMXMtMTMuOC01LjMtMTkuMSwwbC0yMjUuMSwyMjUuMWMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjFsMjI1LjEsMjI1ICAgYzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMUwxNDUuMTg4LDIzOC41NzV6IiBmaWxsPSIjRkZGRkZGIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==)}:host>.control.arrow.left.dark{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzk5OTk5OSIgZD0iTTE1NS43ODQsMjU1Ljk4NkwzODcuMDEyLDI0Ljc1OWM1LjY4Ny01LjY4Nyw1LjY4Ny0xNC44MDcsMC0yMC40OTRjLTUuNjg4LTUuNjg3LTE0LjgwNy01LjY4Ny0yMC40OTQsMA0KCQlMMTI0Ljk4OSwyNDUuNzkzYy01LjY4Nyw1LjY4Ny01LjY4NywxNC44MDcsMCwyMC40OTRsMjQxLjUyOCwyNDEuNDIxYzIuNzksMi43OSw2LjU0NSw0LjI5MiwxMC4xOTMsNC4yOTINCgkJczcuNDAzLTEuMzk1LDEwLjE5My00LjI5MmM1LjY4Ny01LjY4Nyw1LjY4Ny0xNC44MDcsMC0yMC40OTRMMTU1Ljc4NCwyNTUuOTg2eiIvPg0KPC9nPg0KPC9zdmc+DQo=)}:host>.control.arrow.right{right:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDc3LjE3NSA0NzcuMTc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuMTc1IDQ3Ny4xNzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPg0KPGc+DQoJPHBhdGggZD0iTTM2MC43MzEsMjI5LjA3NWwtMjI1LjEtMjI1LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwcy01LjMsMTMuOCwwLDE5LjFsMjE1LjUsMjE1LjVsLTIxNS41LDIxNS41ICAgYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0YzMuNCwwLDYuOS0xLjMsOS41LTRsMjI1LjEtMjI1LjFDMzY1LjkzMSwyNDIuODc1LDM2NS45MzEsMjM0LjI3NSwzNjAuNzMxLDIyOS4wNzV6ICAgIiBmaWxsPSIjRkZGRkZGIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==)}:host>.control.arrow.right.dark{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iIzk5OTk5OSIgZD0iTTM4Ny4wNTgsMjQ1Ljc5M0wxNDUuNTMsNC4yNjVjLTUuNjg3LTUuNjg3LTE0LjgwNy01LjY4Ny0yMC40OTQsMHMtNS42ODcsMTQuODA3LDAsMjAuNDk0bDIzMS4yMjgsMjMxLjIyOA0KCQlMMTI1LjAzNiw0ODcuMjE0Yy01LjY4Nyw1LjY4OC01LjY4NywxNC44MDgsMCwyMC40OTRjMi43OSwyLjc5LDYuNTQ1LDQuMjkyLDEwLjE5Myw0LjI5MmMzLjY0OCwwLDcuNDAzLTEuMzk1LDEwLjE5My00LjI5Mg0KCQlMMzg2Ljk1LDI2Ni4xOEMzOTIuNjM3LDI2MC42MDEsMzkyLjYzNywyNTEuMzczLDM4Ny4wNTgsMjQ1Ljc5M3oiLz4NCjwvZz4NCjwvc3ZnPg0K)}:host>.control.left-top,:host>.control.right-top{position:absolute;top:20px}:host>.control.left-top.left-top,:host>.control.right-top.left-top{left:10px}:host>.control.left-top.right-top,:host>.control.right-top.right-top{right:10px}:host>.control.left-top>.delete-img,:host>.control.left-top>.ext-url,:host>.control.left-top>.close,:host>.control.right-top>.delete-img,:host>.control.right-top>.ext-url,:host>.control.right-top>.close{position:relative;display:inline-block;width:30px;height:30px;cursor:pointer;text-decoration:none;color:#fff;vertical-align:bottom;transition:background-color .3s ease-in-out}:host>.control.left-top>.delete-img:hover,:host>.control.left-top>.ext-url:hover,:host>.control.left-top>.close:hover,:host>.control.right-top>.delete-img:hover,:host>.control.right-top>.ext-url:hover,:host>.control.right-top>.close:hover{background-color:#ffffff1a}:host>.control.left-top>.delete-img:before,:host>.control.left-top>.ext-url:before,:host>.control.left-top>.close:before,:host>.control.right-top>.delete-img:before,:host>.control.right-top>.ext-url:before,:host>.control.right-top>.close:before{content:\"\";display:block;position:absolute;inset:5px;background-size:100% 100%;background-repeat:no-repeat}:host>.control.left-top>.delete-img.delete-img:before,:host>.control.left-top>.ext-url.delete-img:before,:host>.control.left-top>.close.delete-img:before,:host>.control.right-top>.delete-img.delete-img:before,:host>.control.right-top>.ext-url.delete-img:before,:host>.control.right-top>.close.delete-img:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5IDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSA1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01Mi41LDZIMzguNDU2Yy0wLjExLTEuMjUtMC40OTUtMy4zNTgtMS44MTMtNC43MTFDMzUuODA5LDAuNDM0LDM0Ljc1MSwwLDMzLjQ5OSwwSDIzLjVjLTEuMjUyLDAtMi4zMSwwLjQzNC0zLjE0NCwxLjI4OSAgQzE5LjAzOCwyLjY0MiwxOC42NTMsNC43NSwxOC41NDMsNkg2LjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMi4wNDFsMS45MTUsNDYuMDIxQzEwLjQ5Myw1NS43NDMsMTEuNTY1LDU5LDE1LjM2NCw1OSAgaDI4LjI3MmMzLjc5OSwwLDQuODcxLTMuMjU3LDQuOTA3LTQuOTU4TDUwLjQ1OSw4SDUyLjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM1My4wNTIsNiw1Mi41LDZ6IE0yMC41LDUwYzAsMC41NTMtMC40NDgsMS0xLDEgIHMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMXMxLDAuNDQ3LDEsMVY1MHogTTMwLjUsNTBjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMSAgczEsMC40NDcsMSwxVjUweiBNNDAuNSw1MGMwLDAuNTUzLTAuNDQ4LDEtMSwxcy0xLTAuNDQ3LTEtMVYxN2MwLTAuNTUzLDAuNDQ4LTEsMS0xczEsMC40NDcsMSwxVjUweiBNMjEuNzkyLDIuNjgxICBDMjIuMjQsMi4yMjMsMjIuNzk5LDIsMjMuNSwyaDkuOTk5YzAuNzAxLDAsMS4yNiwwLjIyMywxLjcwOCwwLjY4MWMwLjgwNSwwLjgyMywxLjEyOCwyLjI3MSwxLjI0LDMuMzE5SDIwLjU1MyAgQzIwLjY2NSw0Ljk1MiwyMC45ODgsMy41MDQsMjEuNzkyLDIuNjgxeiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)}:host>.control.left-top>.delete-img.delete-img.dark:before,:host>.control.left-top>.ext-url.delete-img.dark:before,:host>.control.left-top>.close.delete-img.dark:before,:host>.control.right-top>.delete-img.delete-img.dark:before,:host>.control.right-top>.ext-url.delete-img.dark:before,:host>.control.right-top>.close.delete-img.dark:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU5IDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSA1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik01Mi41LDZIMzguNDU2Yy0wLjExLTEuMjUtMC40OTUtMy4zNTgtMS44MTMtNC43MTFDMzUuODA5LDAuNDM0LDM0Ljc1MSwwLDMzLjQ5OSwwSDIzLjVjLTEuMjUyLDAtMi4zMSwwLjQzNC0zLjE0NCwxLjI4OSAgQzE5LjAzOCwyLjY0MiwxOC42NTMsNC43NSwxOC41NDMsNkg2LjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMi4wNDFsMS45MTUsNDYuMDIxQzEwLjQ5Myw1NS43NDMsMTEuNTY1LDU5LDE1LjM2NCw1OSAgaDI4LjI3MmMzLjc5OSwwLDQuODcxLTMuMjU3LDQuOTA3LTQuOTU4TDUwLjQ1OSw4SDUyLjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM1My4wNTIsNiw1Mi41LDZ6IE0yMC41LDUwYzAsMC41NTMtMC40NDgsMS0xLDEgIHMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMXMxLDAuNDQ3LDEsMVY1MHogTTMwLjUsNTBjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWMTdjMC0wLjU1MywwLjQ0OC0xLDEtMSAgczEsMC40NDcsMSwxVjUweiBNNDAuNSw1MGMwLDAuNTUzLTAuNDQ4LDEtMSwxcy0xLTAuNDQ3LTEtMVYxN2MwLTAuNTUzLDAuNDQ4LTEsMS0xczEsMC40NDcsMSwxVjUweiBNMjEuNzkyLDIuNjgxICBDMjIuMjQsMi4yMjMsMjIuNzk5LDIsMjMuNSwyaDkuOTk5YzAuNzAxLDAsMS4yNiwwLjIyMywxLjcwOCwwLjY4MWMwLjgwNSwwLjgyMywxLjEyOCwyLjI3MSwxLjI0LDMuMzE5SDIwLjU1MyAgQzIwLjY2NSw0Ljk1MiwyMC45ODgsMy41MDQsMjEuNzkyLDIuNjgxeiIgZmlsbD0iIzk5OTk5OSIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)}:host>.control.left-top>.delete-img.close:before,:host>.control.left-top>.ext-url.close:before,:host>.control.left-top>.close.close:before,:host>.control.right-top>.delete-img.close:before,:host>.control.right-top>.ext-url.close:before,:host>.control.right-top>.close.close:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTJweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0Ij4NCiAgPGc+DQogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI4Ljk0MSwzMS43ODZMMC42MTMsNjAuMTE0Yy0wLjc4NywwLjc4Ny0wLjc4NywyLjA2MiwwLDIuODQ5YzAuMzkzLDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OSAgIGMwLjUxNiwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTlsMjguNTQxLTI4LjU0MWwyOC41NDEsMjguNTQxYzAuMzk0LDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OWMwLjUxNSwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTkgICBjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OUwzNS4wNjQsMzEuNzg2TDYzLjQxLDMuNDM4YzAuNzg3LTAuNzg3LDAuNzg3LTIuMDYyLDAtMi44NDljLTAuNzg3LTAuNzg2LTIuMDYyLTAuNzg2LTIuODQ4LDAgICBMMzIuMDAzLDI5LjE1TDMuNDQxLDAuNTljLTAuNzg3LTAuNzg2LTIuMDYxLTAuNzg2LTIuODQ4LDBjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDlMMjguOTQxLDMxLjc4NnoiLz4NCiAgPC9nPg0KPC9zdmc+DQo=)}:host>.control.left-top>.delete-img.close.dark:before,:host>.control.left-top>.ext-url.close.dark:before,:host>.control.left-top>.close.close.dark:before,:host>.control.right-top>.delete-img.close.dark:before,:host>.control.right-top>.ext-url.close.dark:before,:host>.control.right-top>.close.close.dark:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik0yMzEuNTI4LDI1NC4yODhMNC45MDQsNDgwLjkxMmMtNi4yOTYsNi4yOTYtNi4yOTYsMTYuNDk2LDAsMjIuNzkyYzMuMTQ0LDMuMTUyLDcuMjcyLDQuNzIsMTEuMzkyLDQuNzINCgkJYzQuMTI4LDAsOC4yNDgtMS41NjcsMTEuMzkyLTQuNzJsMjI4LjMyOC0yMjguMzI4bDIyOC4zMjgsMjI4LjMyOGMzLjE1MiwzLjE1Miw3LjI3Miw0LjcyLDExLjM5Myw0LjcyDQoJCWM0LjExOSwwLDguMjQ4LTEuNTY3LDExLjM5Mi00LjcyYzYuMjk2LTYuMjk2LDYuMjk2LTE2LjQ5NiwwLTIyLjc5MkwyODAuNTEyLDI1NC4yODhMNTA3LjI4LDI3LjUwNA0KCQljNi4yOTYtNi4yOTYsNi4yOTYtMTYuNDk2LDAtMjIuNzkyYy02LjI5Ni02LjI4OC0xNi40OTYtNi4yODgtMjIuNzg0LDBMMjU2LjAyNCwyMzMuMkwyNy41MjgsNC43Mg0KCQljLTYuMjk2LTYuMjg4LTE2LjQ4OC02LjI4OC0yMi43ODQsMGMtNi4yOTYsNi4yOTYtNi4yOTYsMTYuNDk2LDAsMjIuNzkyTDIzMS41MjgsMjU0LjI4OHoiLz4NCjwvZz4NCjwvc3ZnPg0K)}:host>.control.left-top>.delete-img.ext-url:before,:host>.control.left-top>.ext-url.ext-url:before,:host>.control.left-top>.close.ext-url:before,:host>.control.right-top>.delete-img.ext-url:before,:host>.control.right-top>.ext-url.ext-url:before,:host>.control.right-top>.close.ext-url:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTkxLjYgNTkxLjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5MS42IDU5MS42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTgxLjQsMjA0Yy01LjcxMiwwLTEwLjIsNC40ODgtMTAuMiwxMC4ydjMyNi40YzAsMTYuOTMyLTEzLjY2OCwzMC42LTMwLjYsMzAuNkg1MWMtMTYuOTMyLDAtMzAuNi0xMy42NjgtMzAuNi0zMC42VjUxICAgIGMwLTE2LjkzMiwxMy42NjgtMzAuNiwzMC42LTMwLjZoMzI2LjRjNS43MTIsMCwxMC4yLTQuNDg4LDEwLjItMTAuMlMzODMuMTEyLDAsMzc3LjQsMEg1MUMyMi44NDgsMCwwLDIyLjg0OCwwLDUxdjQ4OS42ICAgIGMwLDI4LjE1MiwyMi44NDgsNTEsNTEsNTFoNDg5LjZjMjguMTUyLDAsNTEtMjIuODQ4LDUxLTUxVjIxNC4yQzU5MS42LDIwOC42OTIsNTg2LjkwOCwyMDQsNTgxLjQsMjA0eiIgZmlsbD0iI0ZGRkZGRiIvPg0KCQk8cGF0aCBkPSJNNTkxLjM5Niw4LjE2YzAtMC4yMDQtMC4yMDQtMC42MTItMC4yMDQtMC44MTZjMC0wLjQwOC0wLjIwNC0wLjYxMi0wLjQwOC0xLjAyYy0wLjIwNC0wLjQwOC0wLjQwOC0wLjYxMi0wLjYxMi0xLjAyICAgIGMtMC4yMDQtMC4yMDQtMC4yMDQtMC42MTItMC40MDgtMC44MTZjLTAuODE2LTEuMDItMS42MzItMi4wNC0yLjg1Ni0yLjg1NmMtMC4yMDQtMC4yMDQtMC42MTItMC4yMDQtMC44MTYtMC40MDggICAgYy0wLjQwOC0wLjIwNC0wLjYxMi0wLjQwOC0xLjAyLTAuNjEyYy0wLjQwOC0wLjIwNC0wLjYxMi0wLjIwNC0xLjAyLTAuNDA4Yy0wLjIwNCwwLTAuNjEyLTAuMjA0LTAuODE2LTAuMjA0ICAgIGMtMC42MTIsMC4yMDQtMS4yMjQsMC0xLjgzNiwwbDAsMEg0MzguNmMtNS43MTIsMC0xMC4yLDQuNDg4LTEwLjIsMTAuMnM0LjQ4OCwxMC4yLDEwLjIsMTAuMmgxMTguMTE2bC0zNzAuMjYsMzcwLjI2ICAgIGMtNC4wOCw0LjA4LTQuMDgsMTAuNDA0LDAsMTQuNDg0YzIuMDQsMi4wNCw0LjY5MiwzLjA2LDcuMTQsMy4wNmMyLjQ0OCwwLDUuMzA0LTEuMDIsNy4xNC0zLjA2TDU3MS4yLDM0Ljg4NFYxNTMgICAgYzAsNS43MTIsNC40ODgsMTAuMiwxMC4yLDEwLjJzMTAuMi00LjQ4OCwxMC4yLTEwLjJWMTAuMkM1OTEuNiw5LjU4OCw1OTEuMzk2LDguOTc2LDU5MS4zOTYsOC4xNnoiIGZpbGw9IiNGRkZGRkYiLz4NCgkJPHBhdGggZD0iTTUxLDQ1LjljLTIuODU2LDAtNS4xLDIuMjQ0LTUuMSw1LjF2MTQyLjhjMCwyLjg1NiwyLjI0NCw1LjEsNS4xLDUuMXM1LjEtMi4yNDQsNS4xLTUuMVY1Ni4xaDEzNy43ICAgIGMyLjg1NiwwLDUuMS0yLjI0NCw1LjEtNS4xcy0yLjI0NC01LjEtNS4xLTUuMUg1MXoiIGZpbGw9IiNGRkZGRkYiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==)}:host>.control.left-top>.delete-img.ext-url.dark:before,:host>.control.left-top>.ext-url.ext-url.dark:before,:host>.control.left-top>.close.ext-url.dark:before,:host>.control.right-top>.delete-img.ext-url.dark:before,:host>.control.right-top>.ext-url.ext-url.dark:before,:host>.control.right-top>.close.ext-url.dark:before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik01MDMuMTczLDE3Ni41NTJjLTQuOTQ0LDAtOC44MjgsMy44ODQtOC44MjgsOC44Mjh2MjgyLjQ4M2MwLDE0LjY1My0xMS44MjksMjYuNDgyLTI2LjQ4MiwyNi40ODJINDQuMTM4DQoJCQljLTE0LjY1MywwLTI2LjQ4Mi0xMS44MjktMjYuNDgyLTI2LjQ4MlY0NC4xMzhjMC0xNC42NTMsMTEuODI5LTI2LjQ4MiwyNi40ODItMjYuNDgyaDI4Mi40ODNjNC45NDMsMCw4LjgyNy0zLjg4NCw4LjgyNy04LjgyOA0KCQkJUzMzMS41NjQsMCwzMjYuNjIxLDBINDQuMTM4QzE5Ljc3NCwwLDAsMTkuNzc0LDAsNDQuMTM4djQyMy43MjVDMCw0OTIuMjI3LDE5Ljc3NCw1MTIsNDQuMTM4LDUxMmg0MjMuNzI1DQoJCQlDNDkyLjIyNyw1MTIsNTEyLDQ5Mi4yMjcsNTEyLDQ2Ny44NjJWMTg1LjM3OUM1MTIsMTgwLjYxMiw1MDcuOTM5LDE3Ni41NTIsNTAzLjE3MywxNzYuNTUyeiIvPg0KCQk8cGF0aCBmaWxsPSIjOTk5OTk5IiBkPSJNNTExLjgyMyw3LjA2MmMwLTAuMTc2LTAuMTc3LTAuNTMtMC4xNzctMC43MDZjMC0wLjM1My0wLjE3Ni0wLjUzLTAuMzUzLTAuODgzcy0wLjM1NC0wLjUzLTAuNTMtMC44ODMNCgkJCWMtMC4xNzYtMC4xNzYtMC4xNzYtMC41My0wLjM1My0wLjcwNmMtMC43MDYtMC44ODMtMS40MTItMS43NjYtMi40NzItMi40NzJjLTAuMTc3LTAuMTc3LTAuNTI5LTAuMTc3LTAuNzA2LTAuMzUzDQoJCQljLTAuMzU0LTAuMTc3LTAuNTMtMC4zNTQtMC44ODMtMC41M2MtMC4zNTQtMC4xNzctMC41My0wLjE3Ny0wLjg4My0wLjM1M2MtMC4xNzcsMC0wLjUzLTAuMTc3LTAuNzA2LTAuMTc3DQoJCQljLTAuNTMsMC4xNzctMS4wNiwwLTEuNTksMGwwLDBIMzc5LjU4NmMtNC45NDMsMC04LjgyNywzLjg4NC04LjgyNyw4LjgyOHMzLjg4NCw4LjgyOCw4LjgyNyw4LjgyOEg0ODEuODFMMTYxLjM2OCwzMzguMDk3DQoJCQljLTMuNTMxLDMuNTMxLTMuNTMxLDkuMDA0LDAsMTIuNTM1YzEuNzY2LDEuNzY2LDQuMDYxLDIuNjQ4LDYuMTc5LDIuNjQ4YzIuMTE5LDAsNC41OS0wLjg4Myw2LjE4LTIuNjQ4TDQ5NC4zNDUsMzAuMTl2MTAyLjIyNA0KCQkJYzAsNC45NDMsMy44ODQsOC44MjcsOC44MjgsOC44MjdjNC45NDMsMCw4LjgyNy0zLjg4NCw4LjgyNy04LjgyN1Y4LjgyOEM1MTIsOC4yOTgsNTExLjgyMyw3Ljc2OCw1MTEuODIzLDcuMDYyeiIvPg0KCQk8cGF0aCBmaWxsPSIjOTk5OTk5IiBkPSJNNDQuMTM4LDM5LjcyNGMtMi40NzIsMC00LjQxNCwxLjk0Mi00LjQxNCw0LjQxNHYxMjMuNTg2YzAsMi40NzIsMS45NDIsNC40MTQsNC40MTQsNC40MTQNCgkJCWMyLjQ3MiwwLDQuNDE0LTEuOTQyLDQuNDE0LTQuNDE0VjQ4LjU1MmgxMTkuMTcyYzIuNDcyLDAsNC40MTQtMS45NDIsNC40MTQtNC40MTRjMC0yLjQ3Mi0xLjk0Mi00LjQxNC00LjQxNC00LjQxNEg0NC4xMzh6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], { opened: [{
            type: HostBinding,
            args: ['class.active']
        }], conf: [{
            type: Input
        }], images: [{
            type: Input
        }], onOpen: [{
            type: Output
        }], onClose: [{
            type: Output
        }], onDelete: [{
            type: Output
        }], onImageChange: [{
            type: Output
        }], onImageClicked: [{
            type: Output
        }], onError: [{
            type: Output
        }], thumbnailsElem: [{
            type: ViewChild,
            args: ['thumbnails']
        }], onKeyboardInput: [{
            type: HostListener,
            args: ['window:keydown', ['$event']]
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NgxImageGalleryComponent, { className: "NgxImageGalleryComponent" }); })();

class ClickOutsideDirective {
    _elementRef;
    clickOutside = new EventEmitter();
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    onClick($event, targetElement) {
        const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedInside) {
            this.clickOutside.emit($event);
        }
    }
    static ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, i0.ɵɵresolveDocument);
        } }, outputs: { clickOutside: "clickOutside" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[clickOutside]'
            }]
    }], () => [{ type: i0.ElementRef }], { clickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();

class NgxImageGalleryModule {
    static ɵfac = function NgxImageGalleryModule_Factory(t) { return new (t || NgxImageGalleryModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxImageGalleryModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxImageGalleryModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgxImageGalleryComponent,
                    MouseWheelDirective,
                    ClickOutsideDirective
                ],
                exports: [
                    NgxImageGalleryComponent,
                    MouseWheelDirective,
                    ClickOutsideDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxImageGalleryModule, { declarations: [NgxImageGalleryComponent,
        MouseWheelDirective,
        ClickOutsideDirective], imports: [CommonModule], exports: [NgxImageGalleryComponent,
        MouseWheelDirective,
        ClickOutsideDirective] }); })();

/*
 * Public API Surface of ngx-image-gallery
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ClickOutsideDirective, MouseWheelDirective, NgxImageGalleryComponent, NgxImageGalleryModule };
//# sourceMappingURL=intelinair-ngx-image-gallery.mjs.map
