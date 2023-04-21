import { useSelector } from 'react-redux';
import { selectFiltredContacts } from '../../redux/selectors';
import ContactItem from './ContactItem';

export default function ContactList() {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <ul style={{ margin: '0' }}>
      {filtredContacts.map(item => {
        return (
          <li key={item.id}>
            <ContactItem contact={item} />
          </li>
        );
      })}
    </ul>
  );
}
