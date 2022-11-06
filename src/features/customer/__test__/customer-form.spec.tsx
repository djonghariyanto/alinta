import { render, waitFor } from '../../../common/utils/test';
import userEvent from '@testing-library/user-event';

import { ERROR_REQUIRED, ERROR_SAME_NAME, ERROR_PHONE } from '../';
import CustomerForm from '../components/form';

describe('Customer form validation on submit test', () => {
  it('Success on submit with valid customer entry', async () => {
    const handleSubmit = jest.fn();

    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const firstName = fC.getByTestId('firstName');
    const lastName = fC.getByTestId('lastName');
    const phoneNumber = fC.getByTestId('phoneNumber');
    const dateOfBirth = fC.getByTestId('dateOfBirth');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(firstName, "Bob");
    userEvent.type(lastName, "Marley");
    userEvent.type(phoneNumber, "0404798999");
    userEvent.type(dateOfBirth, "2004-11-21");
    userEvent.click(submitButton);

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: "Bob",
        lastName: "Marley",
        phoneNumber: "0404798999",
        dateOfBirth: "2004-11-21"
      }),
    );
  });

  it('Success Phone Number Entru: Start with +', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "+62403708123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch("");
    });
  });

  it('Success Phone Number Entru: Start with +', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "+62403708123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch("");
    });
  });

  it('Failure on empty field validation test', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const firstName = fC.getByTestId('errorFirstName');
    const lastName = fC.getByTestId('errorLastName');
    const phoneNumber = fC.getByTestId('errorPhoneNumber');
    const dateOfBirth = fC.getByTestId('errorDateOfBirth');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(firstName, "");
    userEvent.type(lastName, "");
    userEvent.type(phoneNumber, "");
    userEvent.type(dateOfBirth, "");
    userEvent.click(submitButton);

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(firstName.textContent).toMatch(ERROR_REQUIRED);
      expect(lastName.textContent).toMatch(ERROR_REQUIRED);
      expect(phoneNumber.textContent).toMatch(ERROR_REQUIRED);
      expect(dateOfBirth.textContent).toMatch(ERROR_REQUIRED);
    });
  });

  it('Failure on the same first and last name validation test(case insensitive)', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const firstName = fC.getByTestId('firstName');
    const lastName = fC.getByTestId('lastName');
    const errorLastName = fC.getByTestId('errorLastName');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(firstName, "BOB");
    userEvent.type(lastName, "bob");

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorLastName.textContent).toMatch(ERROR_SAME_NAME);
    });
  });

  it('Failure on invalid phone number entry: contain alphabet', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "1234567890a");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch(ERROR_PHONE);
    });
  });

  it('Failure on invalid phone number entry: contain + anywhere but not prefix', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "123456789012+");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch(ERROR_PHONE);
    });
  });


  it('Failure on invalid phone number entry(start without + or 0): length < 10', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "123456789");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch(ERROR_PHONE);
    });
  });

  it('Failure on invalid phone number entry(start with + or 0): length < 11', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "+234567890");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch(ERROR_PHONE);
    });
  });

  it('Failure on invalid phone number entry(start without + or 0): length > 12', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "1234567890123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch(ERROR_PHONE);
    });
  });

  it('Failure on invalid phone number entry(start with + or 0): length > 13', async () => {
    const handleSubmit = jest.fn();
    
    const fC = render(<CustomerForm onAddCustomer={handleSubmit} />);

    const phoneNumber = fC.getByTestId('phoneNumber');
    const errorPhoneNumber = fC.getByTestId('errorPhoneNumber');
    const submitButton = fC.getByTestId('customerSubmitButton');

    userEvent.type(phoneNumber, "+2345678901234");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(errorPhoneNumber.textContent).toMatch(ERROR_PHONE);
    });
  });
});
