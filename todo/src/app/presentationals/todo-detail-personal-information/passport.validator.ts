import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passportValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const age = control.get('age');
  const passportId = control.get('passportId');

  if (!age || !passportId) {
    return null;
  }

  const isAdult = age.value >= 18;
  const hasPassportValue = Boolean(passportId.value);
  const hasError = isAdult && !hasPassportValue;

  if (hasError) {
    const error = { passportIdRequired: true };

    passportId.setErrors(error);

    return error;
  }

  passportId.setErrors(null);

  return null;
};
