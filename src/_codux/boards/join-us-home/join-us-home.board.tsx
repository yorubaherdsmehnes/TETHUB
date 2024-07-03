import { createBoard } from '@wixc3/react-board';
import { JoinUsHome } from '../../../components/home/join-us-home/join-us-home';

export default createBoard({
    name: 'JoinUsHome',
    Board: () => <JoinUsHome />,
    isSnippet: true,
});
