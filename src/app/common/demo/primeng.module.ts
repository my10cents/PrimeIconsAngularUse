import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, DropdownModule } from 'primeng/primeng';

const primeModules = [
    DataTableModule,
    DropdownModule
];

@NgModule({
    imports: [CommonModule, primeModules],
    exports: [primeModules],
    declarations: []
})
export class PrimengModule {}
