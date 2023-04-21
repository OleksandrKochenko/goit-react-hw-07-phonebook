import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { NameInput, TelInput, SubmitButton } from './FormElements';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.elements.name.value,
      tel: form.elements.tel.value,
    };
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts!`)
      : dispatch(addContact(data));
    form.reset();
  };

  return (
    <form
      style={{ border: '1px solid black', padding: '20px', width: '400px' }}
      onSubmit={handleSubmit}
    >
      <NameInput />
      <br />
      <br />
      <TelInput />
      <br />
      <br />
      <SubmitButton />
    </form>
  );
}
