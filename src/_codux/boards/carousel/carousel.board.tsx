import { createBoard } from '@wixc3/react-board';
import { Carousel } from '../../../components/carousel/carousel';

export default createBoard({
    name: 'Carousel',
    Board: () => <Carousel />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2102,
        canvasHeight: 1170,
        windowWidth: 1400,
        windowHeight: 1080
    }
});
