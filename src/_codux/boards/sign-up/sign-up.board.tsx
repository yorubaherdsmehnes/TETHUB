import { createBoard } from '@wixc3/react-board';
import { SignUp } from '../../../components/partials/signup/sign-up';

export default createBoard({
    name: 'SignUp',
    Board: () => <SignUp />,
    isSnippet: true,
});
