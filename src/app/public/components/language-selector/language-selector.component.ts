import {Component, inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})

export class LanguageSelectorComponent {
  protected currentLang: string = 'en';
  protected languages: string[] = ['en', 'es'];

  private _translate = inject(TranslateService);

  protected useLanguage(language: string) {
    this._translate.use(language);
    this.currentLang = language;
  }
}
