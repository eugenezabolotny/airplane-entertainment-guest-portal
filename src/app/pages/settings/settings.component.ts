import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    /**
     * Chinese - zh
     * Danish - da
     * English - en
     * French - fr
     * German - de
     * Italian it
     * Japanese - ja
     * Spanish - es
     * Turkish - tr
     * Ukrainian - uk
     **/

    private currentLang: string;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.getCurrentLang();
    }

    getCurrentLang() {
        this.currentLang = this.translate.currentLang;
    }

    setCurrentLang(lang: string) {
        if (this.translate.langs.join(',').indexOf(lang) > -1) {    // if lang key is in array of availabel languages
            this.translate.use(lang);
            this.currentLang = lang;
        } else {    // otherwise use default
            this.translate.use(this.translate.defaultLang);
            this.currentLang = this.translate.defaultLang;
        }
    }
}
