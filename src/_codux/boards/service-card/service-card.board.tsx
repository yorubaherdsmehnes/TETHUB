import { createBoard } from '@wixc3/react-board';
import { Service_Card } from '../../../components/service-card/service-card';

export default createBoard({
    name: 'Service_Card',
    Board: () => <Service_Card />,
    isSnippet: true,
});
