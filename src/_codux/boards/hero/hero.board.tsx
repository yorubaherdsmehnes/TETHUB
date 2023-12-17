import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../components/hero/hero';

export default createBoard({
    name: 'Hero',
    Board: () => <Hero />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1954,
        canvasHeight: 1130,
        windowWidth: 1276,
        windowHeight: 1080
    }
});
