import { createBoard } from '@wixc3/react-board';
import { Cta_div } from '../../../components/cta-div/cta-div';

export default createBoard({
    name: 'Cta_div',
    Board: () => <Cta_div />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1112,
        canvasHeight: 636,
        windowWidth: 774
    }
});
