import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'theme-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="outline-base-content text-start outline-offset-4 w-full"
      attr.data-set-theme="{{ theme() }}"
      data-act-class="[&_svg]:visible"
    >
      <span
        attr.data-theme="{{ theme() }}"
        class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer"
      >
        <span class="grid grid-cols-5 grid-rows-3">
          <span
            class="row-span-3 row-start-1 flex items-center justify-between gap-2 px-4 py-3"
          >
            <span class="text-sm mr-auto"> {{ theme() | titlecase }}</span>
            <span class="flex h-full shrink-0 flex-wrap gap-1">
              <span class="bg-primary rounded-badge w-2"></span>
              <span class="bg-secondary rounded-badge w-2"></span>
              <span class="bg-accent rounded-badge w-2"></span>
              <span class="bg-neutral rounded-badge w-2"></span>
            </span>
          </span>
        </span>
      </span>
    </button>
  `,
})
export class ThemePreviewComponent {
  theme = input.required<string>();
}
