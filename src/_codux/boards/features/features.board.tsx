import { createBoard } from '@wixc3/react-board';
import { Features } from '../../../components/features/features';

export default createBoard({
    name: 'Features',
    Board: () => <Features />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1200,
        canvasWidth: 2310,
        windowWidth: 912,
        windowHeight: 1368
    }
});
