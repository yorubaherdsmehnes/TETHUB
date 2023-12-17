import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1200,
        canvasWidth: 1706,
        windowWidth: 1272,
        windowHeight: 768
    }
});
