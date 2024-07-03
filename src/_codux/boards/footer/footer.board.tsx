import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/partials/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1380,
        canvasWidth: 1262,
        windowWidth: 375,
        windowHeight: 945
    }
});
