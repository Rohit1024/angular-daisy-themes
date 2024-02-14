import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemType, ThemeService, allThemes } from '../theme.service';
import { ThemePreviewComponent } from './preview.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, ThemePreviewComponent],
  template: ` <div class="navbar bg-primary">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl text-primary-content">daisyUI</a>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1">Theme</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] overflow-y-auto block h-[400px] menu p-2 shadow bg-base-200 rounded-box w-56"
        >
          @for (theme of themes(); track theme) {
          <li>
            <div class="w-full" (click)="toggleTheme(theme)">
              <theme-preview [theme]="theme" />
            </div>
          </li>
          }
        </ul>
      </div>
    </div>
  </div>`,
})
export class NavbarComponent {
  public themService = inject(ThemeService);
  themes = signal<typeof allThemes>(allThemes);
  toggleTheme(theme: ThemType) {
    this.themService.setTheme(theme);
  }
}
