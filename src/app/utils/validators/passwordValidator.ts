import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customPasswordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.length < 6) {
    return {
      customPassword: 'Invalid Password. Minimum 6 characters',
    };
  }
  return null;
}
