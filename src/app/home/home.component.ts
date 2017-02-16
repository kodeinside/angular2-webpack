import { Component, OnInit } from '@angular/core';
//import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Capa } from '../@components/card/capa.class';
import { HomeService } from './home.service';
//import { HighlightJsService } from '../../../node_modules/angular2-highlight-js/lib/highlight-js.service';
//import { routerTransition } from './router.animations';
@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    //    animations: [routerTransition()],
    //    host: { '[@routerTransition]': '' }
})
export class HomeComponent implements OnInit {
    //    , AfterViewInit {
    //    private isCopied2 = false;
    private capas: Array<Capa>;
    //    private sampleContent = '';

    constructor(public service: HomeService) {
        //        , private el: ElementRef, private serviceJs: HighlightJsService) {
        this.service.getList().then(res => {
            this.capas = res;
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

