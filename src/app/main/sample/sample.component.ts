import { Component, OnInit } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { TorreService } from '../../torre.service'; 

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent implements OnInit
{

    opportunities = [];
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private torreService: TorreService,
        private _snackBar: MatSnackBar
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

    ngOnInit(){
        this.torreService.getOpportunities().subscribe((data: any)=>{
            console.log(data);
            this.opportunities = data.results;
        })
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, 'OK', {
            verticalPosition: 'top',
            duration: 2000,
        });
      }
}
