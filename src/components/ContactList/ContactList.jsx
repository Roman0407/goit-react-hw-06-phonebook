import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';
const ContactList = ({ filter, onDeleteContact }) => {
    const dispatch = useDispatch();

    return (
        <ul className={css.list}>
            {filter.length > 0 &&
                filter.map(({ id, name, number }) => (
                    <li className={css.item} key={id}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>
                        <button
                            className={css.btnDelete}
                            type="button"
                            onClick={() => dispatch(onDeleteContact(id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
        </ul>
    );
};
ContactList.prototype = {
    filter: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;