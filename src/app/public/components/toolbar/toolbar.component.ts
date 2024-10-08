import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    LanguageSelectorComponent,
    MatButton
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})

export class ToolbarComponent {
}
