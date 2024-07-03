import { createBoard } from '@wixc3/react-board';
import { OffcanvasMenu } from '../../../components/navbar/OffcanvasMenu/offcanvas-menu';

export default createBoard({
    name: 'OffcanvasMenu',
    Board: () => <OffcanvasMenu />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1220,
        canvasHeight: 836,
        windowWidth: 488
    }
});
