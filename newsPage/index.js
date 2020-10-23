/**
 * @format
 */

import {AppRegistry} from 'react-native';
import login from './src/login';
import News from './src/News';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => News);
