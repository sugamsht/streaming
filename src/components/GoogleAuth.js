import React, { useEffect, useState } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";


const clientId = '530472740736-sire28ml6i0vkbn9bnrk9vf9pvj4dr89.apps.googleusercontent.com';

function GoogleAuth(props) {

    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: clientId,
    //             scope: "email"
    //         })
    //     };
    //     gapi.load("client:auth2", start);
    // }, []);

    const [isSignedIn, setIsSignedIn] = useState(null);

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: '530472740736-sire28ml6i0vkbn9bnrk9vf9pvj4dr89.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        });
    }, [])

    const onSuccess = (response) => {
        setIsSignedIn(true);
        console.log("Login Sucessful, Welcome: " + response.profileObj.name);
    }

    const onFailure = (response) => {
        console.log("Login Failed", response);
    }



    function renderAuthButton() {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={() => setIsSignedIn(false)}
                onFailure={() => console.log("Logout Failed")}
            />
        } else {
            return <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        }
    }

    return (
        <div>
            {renderAuthButton()}
        </div>
    );
}

export default GoogleAuth;