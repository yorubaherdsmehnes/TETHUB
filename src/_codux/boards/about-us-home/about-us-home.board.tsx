import { createBoard } from '@wixc3/react-board';
import { AboutUsHome } from '../../../components/home/about-us-home/about-us-home';

export default createBoard({
    name: 'AboutUsHome',
    Board: () => <AboutUsHome />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1112,
        canvasHeight: 864
    }
});
