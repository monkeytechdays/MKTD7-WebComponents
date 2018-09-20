import { MktdMain } from './main/main.webcomponent';
import { MktdNavbar } from './navbar/navbar.webcomponent';
import { MktdExercise } from './exercise/exercise.webcomponent';
import { MktdMarkdown } from './markdown/markdown.webcomponent';

export const components: { [index: string]: Function } = {
    'mktd-main': MktdMain,
    'mktd-navbar': MktdNavbar,
    'mktd-exercise': MktdExercise,
    'mktd-markdown': MktdMarkdown
};