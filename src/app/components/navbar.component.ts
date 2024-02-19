import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemType, ThemeService, allThemes } from '../theme.service';
import { ThemeChipComponent } from './theme-preview.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, ThemeChipComponent],
  template: ` <div class="navbar bg-primary">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl text-primary-content">daisyUI</a>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">Theme</div>
        <div
          tabindex="0"
          class="flex flex-col dropdown-content gap-2 mt-2 z-10 p-4 shadow-2xl bg-base-200 rounded-box w-64 h-72 overflow-y-scroll"
        >
          @for (theme of themes; track theme) {
          <a (click)="toggleTheme(theme)">
            <theme-preview-chip [theme]="theme" />
          </a>
          }
        </div>
      </div>
    </div>
  </div>`,
})
export class NavbarComponent {
  public themService = inject(ThemeService);
  themes = allThemes;
  toggleTheme(theme: ThemType) {
    this.themService.setTheme(theme);
  }
}
