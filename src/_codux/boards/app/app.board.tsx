import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 2006,
        canvasHeight: 1271,
        windowWidth: 1258,
        windowHeight: 768
    }
});
