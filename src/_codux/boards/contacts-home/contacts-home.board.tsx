import { createBoard } from '@wixc3/react-board';
import { ContactsHome } from '../../../components/home/contacts-home/contacts-home';

export default createBoard({
    name: 'ContactsHome',
    Board: () => <ContactsHome />,
    isSnippet: true,
});
