import { createBoard } from '@wixc3/react-board';
import { Sevice_card } from '../../../components/sevice-card/sevice-card';

export default createBoard({
    name: 'Sevice_card',
    Board: () => <Sevice_card />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1152,
        canvasHeight: 756,
        windowWidth: 560,
        windowHeight: 667
    }
});
