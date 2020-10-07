import remoteConfig from '@react-native-firebase/remote-config'
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

const initializeRemoteConfig: (defaultValues: any) => Promise<any> = (defaultValues: any) =>
    new Promise(async (resolve, reject) => {
        try {
            await remoteConfig().fetch(0)
            await remoteConfig().setDefaults(defaultValues)
            await remoteConfig().fetchAndActivate()
            resolve()
        } catch (error) {
            reject(error)
        }
    })

const requestNotificationPermission: () => Promise<FirebaseMessagingTypes.AuthorizationStatus> = () => {
    return messaging().requestPermission()
}

export { initializeRemoteConfig, requestNotificationPermission }
