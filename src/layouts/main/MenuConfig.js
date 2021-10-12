import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE, PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'Storia',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  },
  {
    title: 'Contatti',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.contact
  },
  {
    title: 'Certificazioni',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.components
  }
];

export default menuConfig;
