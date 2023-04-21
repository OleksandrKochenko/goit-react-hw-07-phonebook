import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      {contact.name}: {contact.tel}
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        type="button"
        onClick={handleDelete}
      >
        <MdOutlineDeleteForever size={24} />
      </button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};
