import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: 'custom-directive-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'custom-directive/custom-directive-examples.component.html'
})

export class CustomDirectiveExamplesComponent {
}