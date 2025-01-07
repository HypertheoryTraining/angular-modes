import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div>
      <p>Here is your confirmation. All the stuff you need to confirm.</p>
    </div>
    <div class="form-control w-1/5">
      <label class="cursor-pointer label">
        <span class="label-text">Yes, that sounds totall rad. Thanks.</span>
        <input
          type="checkbox"
          class="checkbox checkbox-warning"
          (change)="toggle()"
        />
      </label>
    </div>
    @if (confirmed()) {
      <div>
        <a class="link" routerLink="">Go Back</a>
      </div>
    }
  `,
  styles: ``,
})
export class ConfirmationComponent {
  router = inject(Router);
  confirmed = signal(false);
  toggle() {
    this.confirmed.update((c) => !c);
  }
  ok() {
    this.confirmed.set(true);
    this.router.navigate(['']);
  }
}

export const canDeactivateConfirmationGuard: CanDeactivateFn<
  ConfirmationComponent
> = (component: ConfirmationComponent) => {
  return component.confirmed();
};
