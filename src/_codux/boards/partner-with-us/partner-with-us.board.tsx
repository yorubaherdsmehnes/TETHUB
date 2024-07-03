import { createBoard } from '@wixc3/react-board';
import { PartnerWithUs } from '../../../components/home/partner-with-us/partner-with-us';

export default createBoard({
    name: 'PartnerWithUs',
    Board: () => <PartnerWithUs />,
    isSnippet: true,
});
