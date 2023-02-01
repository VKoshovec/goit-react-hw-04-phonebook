import PropTypes from 'prop-types'
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({contacts, onClick}) => {
    return (
      <ul>
        { contacts.map((element)=> {
          return <ContactItem key = { element.id }
             name = { element.name }
             number = { element.number }
             onClick = { onClick }
          />
        }) }
      </ul>   
    );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
}

export default ContactList;