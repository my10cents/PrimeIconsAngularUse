import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsDemoComponent } from './icons/icons-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const demoModules = [
    IconsDemoComponent
];

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [demoModules],
    exports: [demoModules]
})
export class DemoModule {}
