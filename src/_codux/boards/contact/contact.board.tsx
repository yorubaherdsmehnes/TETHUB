import { createBoard } from '@wixc3/react-board';
import { Contact } from '../../../components/views/contact/contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />,
    isSnippet: true,
});
