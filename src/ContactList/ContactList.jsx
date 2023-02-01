import PropTypes from 'prop-types'
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({contactArr, onClick}) => {
    return (
      <ul>
        { contactArr.map((element)=> {
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
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
}

export default ContactList;