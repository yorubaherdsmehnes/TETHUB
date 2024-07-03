import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1200,
        canvasWidth: 1948,
        windowWidth: 548,
        windowHeight: 1080
    }
});
