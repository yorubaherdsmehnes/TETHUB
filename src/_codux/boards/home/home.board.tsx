import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1150,
        canvasWidth: 2041,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
