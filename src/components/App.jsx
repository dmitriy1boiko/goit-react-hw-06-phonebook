import Section from './section/Section';
import Bookcontact from './bookcontact/Bookcontact';
import { Container } from './App.styled';
import { Contacts } from './contacts/Contacts';
import { useState } from 'react';
import { FilterContacts } from './filter-contacts/FilterContacts';

export const App = () => {
  // const [contacts, setContakts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const findContact = contact => {
  //   return contacts.find(
  //     item => item.name.toLowerCase() === contact.name.toLowerCase()
  //   );
  // };

  

  //   setContakts(prev => [...prev, contact]);
  // };

  const handleChengeInput = filter => {
    setFilter(filter);
  };

  // const applyFilters = () => {
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       contact.number.includes(filter)
  //   );
  // };

  
  return (
    <Container>
      <Section>
        <Bookcontact></Bookcontact>
      </Section>
      <Section title="Contacts">
        <FilterContacts filter={filter} onChangeInput={handleChengeInput} />
        <Contacts

        // onDeleteContact={handleDeleteContact}
        />
      </Section>
    </Container>
  );
};
