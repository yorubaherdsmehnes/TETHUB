import { createBoard } from '@wixc3/react-board';
import { ServicesHome } from '../../../components/home/services-home/services-home';

export default createBoard({
    name: 'ServicesHome',
    Board: () => <ServicesHome />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1185,
        canvasHeight: 717
    }
});
