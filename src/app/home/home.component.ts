import { Component, OnInit } from '@angular/core';
//import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Card } from '../@components/card/card.class';
import { HomeService } from './home.service';
//import { HighlightJsService } from '../../../node_modules/angular2-highlight-js/lib/highlight-js.service';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    //    , AfterViewInit {
    //    private isCopied2 = false;
    private cards: Array<Card>;
    //    private sampleContent = '';

    constructor(public service: HomeService) {
        //        , private el: ElementRef, private serviceJs: HighlightJsService) {
        this.service.getList()
            .then(cards => {
                this.cards = cards;
            });
    }

    ngOnInit() {
        console.log('Home');
        //        this.addContent();
    }

    //    ngAfterViewInit() {
    //        this.serviceJs.highlight(this.el.nativeElement.querySelector('.typescript'));
    //    }
    //
    //    highlightByService(target: ElementRef) {
    //        this.serviceJs.highlight(target);
    //    }

    //    addContent() {
    //        this.sampleContent = `
    // import { NgModule } from '@angular/core';
    // import { CommonModule } from '@angular/common';
    // import { FormsModule } from '@angular/forms';
    //
    // import { HomeComponent } from './home.component';
    // import { HomeService } from './home.service';
    //
    // import { CardModule } from '../@components/card/card.module';
    //
    // import { ClipboardModule } from 'ngx-clipboard';
    //
    //// import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
    //
    // @NgModule({
    //    imports: [CommonModule, FormsModule, CardModule, ClipboardModule, HighlightJsModule],
    //    declarations: [HomeComponent],
    //    exports: [HomeComponent],
    //    providers: [HomeService, HighlightJsService]
    // })
    // export class HomeModule { }
    //                    `;
    //    }
}

