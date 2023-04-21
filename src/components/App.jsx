import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <h3>Contacts :</h3>
      <Filter />
      <Loader />
      <ContactList />
    </Layout>
  );
}
