import Home from '../pages/home';
import Form from '../pages/form';
import Video from '../pages/video';

export const pages = [
    {
        url: '/',
        title: "Home",
        index: 0,
        cont: Home,
    },
    {
        url: '/join',
        title: "Join",
        index: 1,
        cont: Form,
    },
    {
        url: '/video',
        title: "Video",
        index: 2,
        cont: Video,
    },

];