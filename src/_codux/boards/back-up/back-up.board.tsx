import { createBoard } from '@wixc3/react-board';
import { BackUp } from '../../../components/not useful/back-up/back-up';

export default createBoard({
    name: 'BackUp',
    Board: () => <BackUp />,
    isSnippet: true,
});
