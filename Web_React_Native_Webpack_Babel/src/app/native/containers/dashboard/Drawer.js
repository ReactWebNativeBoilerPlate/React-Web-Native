import SideDrawer from '../../components/SideDrawer'
import {  DrawerNavigator} from 'react-navigation';
import Dashboard from './Dashboard'

const Drawer = DrawerNavigator({
    Home:Dashboard
  },{
     contentComponent:SideDrawer,
     drawerWidth: 330
  });

  export default Drawer;