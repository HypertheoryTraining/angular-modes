import { Routes } from '@angular/router';
import {
  canDeactivateConfirmationGuard,
  ConfirmationComponent,
} from './pages/confirmation.component';

export const routes: Routes = [
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    canDeactivate: [canDeactivateConfirmationGuard],
  },
];
