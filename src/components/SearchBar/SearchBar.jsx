import PropTypes from 'prop-types';
import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

export default function SearchBar({ filter, handleChange }) {
  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        type="search"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={handleChange}
      />
    </FormLabel>
  );
}

SearchBar.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
