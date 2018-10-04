import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import * as moment from 'moment';

@Component({
    selector: 'datatable-demo',
    templateUrl: './datatable-demo.component.html',
    styleUrls: ['./datatable-demo.component.scss']
})
export class DatatableDemoComponent implements OnInit {
    transactions: {
        date: Date;
        label: string;
        amount: number;
        category: string;
    }[];

    categories: SelectItem[];

    constructor() {}

    ngOnInit() {
        this.transactions = [
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            { label: 'Third transaction', amount: 15, category: 'Transport', date: new Date(2017, 10, 10, 13, 10, 15), },
            {
                date: new Date(2017, 7, 3, 9, 35, 0),
                label: 'Second transaction',
                amount: 100,
                category: 'Bills'
            },
            {
                date: new Date(2017, 3, 27, 15, 43, 10),
                label: 'First transaction',
                amount: 90,
                category: 'Transport'
            }
        ];

        this.categories = [
            { label: 'All', value: null },
            { label: 'Bills', value: 'Bills' },
            { label: 'Transport', value: 'Transport' }
        ];
    }

    format(date) {
        return moment(date).format('lll');
    }
}
