import { createBoard } from '@wixc3/react-board';
import { Event } from '../../../components/views/event/event';

export default createBoard({
    name: 'Event',
    Board: () => <Event />,
    isSnippet: true,
});
