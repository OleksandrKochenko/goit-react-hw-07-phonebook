export const NameInput = () => {
  return (
    <label>
      Name
      <br />
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

export const TelInput = () => {
  return (
    <label>
      Phone
      <br />
      <input
        type="tel"
        name="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
};

export const SubmitButton = () => {
  return (
    <button
      style={{
        padding: '3px',
        borderRadius: '5px',
        fontWeight: '700',
        cursor: 'pointer',
      }}
      type="submit"
    >
      Add contact
    </button>
  );
};
