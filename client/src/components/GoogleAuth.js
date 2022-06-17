import React, { useEffect } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


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

    // const [isSignedIn, setIsSignedIn] = useState(null);

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: clientId,
                scope: 'email'
            }).then(() => {
                const auth = gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange); // listen for changes in the auth status
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const onSuccess = (response) => {
    //     setIsSignedIn(true);
    //     console.log("Login Sucessful, Welcome: " + response.profileObj.name);
    // }

    // const onFailure = (response) => {
    //     console.log("Login Failed", response);
    // }

    const onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            props.signIn(gapi.auth2.getAuthInstance().currentUser.get().getId());
        } else {
            props.signOut();
        }
    }


    function renderAuthButton() {
        if (props.isSignedIn === null) {
            return null;
        } else if (props.isSignedIn) {
            return <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={() => props.signOut()}
                onFailure={() => console.log("Logout Failed")}
            />
        } else {
            return <GoogleLogin
                buttonText="Login"
                onSuccess={() => props.signIn()}
                // onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        }
    }

    return (
        <div>
            {renderAuthButton()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);