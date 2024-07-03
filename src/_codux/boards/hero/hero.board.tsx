import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../components/home/hero/hero';

export default createBoard({
    name: 'Hero',
    Board: () => <Hero />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1954,
        canvasHeight: 1130,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
