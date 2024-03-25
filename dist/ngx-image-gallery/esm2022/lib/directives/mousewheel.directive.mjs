import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class MouseWheelDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJvamVjdHMvbmd4LWltYWdlLWdhbGxlcnkvc3JjL2xpYi9kaXJlY3RpdmVzL21vdXNld2hlZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzlFLE1BQU0sT0FBTyxtQkFBbUI7SUFDcEIsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbEMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFTixrQkFBa0IsQ0FBQyxLQUFVO1FBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUUyQyxtQkFBbUIsQ0FBQyxLQUFVO1FBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUV5QyxjQUFjLENBQUMsS0FBVTtRQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVTtRQUN2QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFpQjtRQUNwRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO2FBQU0sSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELFNBQVM7UUFDVCxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMxQix5QkFBeUI7UUFDekIsSUFBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDOzZFQTlCVSxtQkFBbUI7NkRBQW5CLG1CQUFtQjtZQUFuQix3R0FBQSw4QkFDVCxJQUQ0QixtR0FBbkIsK0JBQ1IsSUFEMkIsK0ZBQW5CLDBCQUNiLElBRGdDOzs7aUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO2dCQUUzQixZQUFZO2tCQUFyQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUVpQyxrQkFBa0I7a0JBQXpELFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBSU0sbUJBQW1CO2tCQUE5RCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBSUEsY0FBYztrQkFBdkQsWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW21vdXNlV2hlZWxdJyB9KVxuZXhwb3J0IGNsYXNzIE1vdXNlV2hlZWxEaXJlY3RpdmUge1xuICBAT3V0cHV0KCkgbW91c2VXaGVlbFVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbW91c2VXaGVlbERvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V3aGVlbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbENocm9tZShldmVudDogYW55KSB7XG4gICAgdGhpcy5tb3VzZVdoZWVsRnVuYyhldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIFsnJGV2ZW50J10pIG9uTW91c2VXaGVlbEZpcmVmb3goZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignb25tb3VzZXdoZWVsJywgWyckZXZlbnQnXSkgb25Nb3VzZVdoZWVsSUUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubW91c2VXaGVlbEZ1bmMoZXZlbnQpO1xuICB9XG5cbiAgbW91c2VXaGVlbEZ1bmMoZXZlbnQ6IGFueSkge1xuICAgIHZhciBldmVudCA9IHdpbmRvdy5ldmVudCB8fCBldmVudDsgLy8gb2xkIElFIHN1cHBvcnRcbiAgICB2YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTtcbiAgICBpZihkZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5tb3VzZVdoZWVsVXAuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIGlmKGRlbHRhIDwgMCkge1xuICAgICAgICB0aGlzLm1vdXNlV2hlZWxEb3duLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgICAvLyBmb3IgSUVcbiAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIC8vIGZvciBDaHJvbWUgYW5kIEZpcmVmb3hcbiAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufSJdfQ==