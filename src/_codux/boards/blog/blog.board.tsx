import { createBoard } from '@wixc3/react-board';
import { Blog } from '../../../components/views/blog/blog';

export default createBoard({
    name: 'Blog',
    Board: () => <Blog />,
    isSnippet: true,
});
