import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 790,
        canvasWidth: 1015
    }
});
