import SideDrawer from '../../components/SideDrawer';
import {  DrawerNavigator} from 'react-navigation';
import Dashboard from './Dashboard';

const Drawer = DrawerNavigator({
    Home:Dashboard
  },{
     contentComponent:SideDrawer,
     drawerWidth: 250
  });

  export default Drawer;