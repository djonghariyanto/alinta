import * as Yup from 'yup';
import { ERROR_REQUIRED, ERROR_SAME_NAME, ERROR_PHONE } from '../../../';
const phoneRegExp = /^[\+0]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const CustomerSchema = Yup.object().shape({
  firstName: Yup.string()
    .lowercase()
    .required(ERROR_REQUIRED),
  lastName: Yup.string()
    .lowercase()
    .required(ERROR_REQUIRED)
    .when('firstName', {
      is: (value: string) => value?.length > 0,
      then:  (schema) => schema.notOneOf([Yup.ref<string>('firstName')], ERROR_SAME_NAME)
    }),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, ERROR_PHONE)
    .required(ERROR_REQUIRED),
  dateOfBirth: Yup.string()
    .required(ERROR_REQUIRED)
});

export default CustomerSchema;

