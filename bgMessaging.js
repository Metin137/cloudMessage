
import firebase from 'react-native-firebase';

import type { RemoteMessage } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
    // handle your message
    alert(RemoteMessage);
    return Promise.resolve();
}