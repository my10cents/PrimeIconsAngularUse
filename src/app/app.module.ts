import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoModule } from './common/demo/demo.module';
import { PrimengModule } from './common/demo/primeng.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DemoModule, PrimengModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
