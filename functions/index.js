const functions = require('firebase-functions');
const admin = require('firebase-admin');
//const serviceAccount = require("../dayscool-fee0-firebase-adminsdk-y91qf-27adf22652.json");
admin.initializeApp(functions.config().firebase);  //la puse

exports.sendNotifications = functions.database.ref('/notifications/{notificationId}').onWrite((change,context) => {
    /*
    // Exit if data already created
    if (change.before.val()) {
        return;
    }

    // Exit when the data is deleted
    if (!change.before.exists()) {
        return;
    }
    */
    //console.log(change.before.val());
    //const data = change.before.val();
    const payload = {
        notification: {
            title: `Bienvenido a Dayscool!`,
            body: `Que diosito se apiade de nosotros`
        }
    }
    console.info(payload);
    // Clean invalid tokens
    function cleanInvalidTokens(tokensWithKey, results) {

        const invalidTokens = [];

        results.forEach((result, i) => {
            if (!result.error) return;

            console.error('Failure sending notification to', tokensWithKey[i].token, result.error);

            switch (result.error.code) {
                case "messaging/invalid-registration-token":
                case "messaging/registration-token-not-registered":
                    invalidTokens.push(admin.database().ref('/tokens').child(tokensWithKey[i].key).remove());
                    break;
                default:
                    break;
            }
        });

        return Promise.all(invalidTokens);
    }


    return admin.database().ref('/tokens').once('value').then((data) => {

        if (!data.val()) return;

        const snapshot = data.val();
        const tokensWithKey = [];
        const tokens = [];

        for (let key in snapshot) {
            tokens.push(snapshot[key].token);
            tokensWithKey.push({
                token: snapshot[key].token,
                key: key
            });
        }

        return admin.messaging().sendToDevice(tokens, payload)
            .then((response) => cleanInvalidTokens(tokensWithKey, response.results))
            //.then(() => admin.database().ref('/notifications').child(change.before.key).remove())
    });
});
