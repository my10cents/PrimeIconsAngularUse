import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsDemoComponent } from './icons/icons-demo.component';
import { UtilsDemoComponent } from './utils/utils-demo.component';
import { DatatableDemoComponent } from './datatable/datatable-demo.component';
import { PrimengModule } from './primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const demoModules = [
    IconsDemoComponent,
    UtilsDemoComponent,
    DatatableDemoComponent
];

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        PrimengModule
    ],
    declarations: [demoModules, DatatableDemoComponent],
    exports: [demoModules]
})
export class DemoModule {}
