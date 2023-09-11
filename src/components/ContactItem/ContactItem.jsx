import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
     return (
       <div>
         <p>
           {contact.name}: <b>{contact.number}</b>
         </p>
         <button onClick={() => dispatch(deleteContact(contact.id))}>
           Delete
         </button>
       </div>
     );
}

