import css from './contactFilter.module.css';
import PropTypes from 'prop-types';

const ContactFilter = ( {onChange , value} ) => {

    const  hendleChange = (e) => {
        const findName = e.currentTarget.value;
        onChange (findName);
     };

    return (<div className={ css.filter }>
        <label>Find contacts by name
           <input 
             onChange={ hendleChange } 
             value={ value }
             type="text"
             name="filter"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required>
             </input>
         </label>
     </div>)
};

ContactFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default ContactFilter;