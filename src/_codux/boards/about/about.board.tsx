import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/views/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1280,
        canvasHeight: 1006
    }
});
