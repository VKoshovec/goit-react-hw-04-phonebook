import css from './contactFilter.module.css';
import { Component } from "react";
import PropTypes from 'prop-types';

class ContactFilter extends Component {

    hendleChange = (e) => {
       const findName = e.currentTarget.value;
       this.props.onChange (findName);
    };

    render() { 
        return (
        <div className={ css.filter }>
           <label>Find contacts by name
              <input 
                onChange={ this.hendleChange } 
                value={ this.props.value }
                type="text"
                name="filter"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required>
                </input>
            </label>
        </div>
        )
    }
};

ContactFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default ContactFilter;