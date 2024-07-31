# Clone


```
git clone --recurse-submodules git@github.com:gunet/funke-wallet-ecosystem.git
```

# Branches

- funke-wallet-ecosystem --> master
- ausweissapp-client --> master
- funke-wallet-backend-server --> funke
- funke-wallet-frontend --> funke
- funke-wallet-enterprise --> funke


# Configure /etc/hosts

```
127.0.0.1	wallet-backend-server
127.0.0.1	secure.wwwallet.local
127.0.0.1	wallet-enterprise-acme-verifier
```

# Wallet frontend .env configuration


```
HOST='0.0.0.0'
PORT=3000
REACT_APP_FIREBASE_VAPIDKEY=BP7G37gorZCJBF9fZx9q_0eCkY2vER2QiIT8nYN8ig7CMcFMI2MQmGkVsYhZsnJHLwpQVqPtGDxSMhjjDAtGBFw
REACT_APP_WALLET_BACKEND_URL=http://wallet-backend-server:8002
REACT_APP_WS_URL=ws://wallet-backend-server:8002
REACT_APP_LOGIN_WITH_PASSWORD=true
REACT_APP_FIREBASE_API_KEY=AIzaSyAfAxdW05Q-fWlMEUEBkPr8avW6GRNjUcE
REACT_APP_FIREBASE_AUTH_DOMAIN=ediplomas-wallet.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=ediplomas-wallet
REACT_APP_FIREBASE_STORAGE_BUCKET=ediplomas-wallet.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=598999145142
REACT_APP_FIREBASE_APP_ID=1:598999145142:web:9561c751460a10b6836417
REACT_APP_FIREBASE_MEASUREMENT_ID=G-SY9LQ8597Y
REACT_APP_DID_KEY_VERSION=jwk_jcs-pub
REACT_APP_VERSION=$npm_package_version
REACT_APP_CONSOLE_TYPES=info,warn,error
REACT_APP_OPENID4VCI_REDIRECT_URI=https://secure.wwwallet.local:8443/
REACT_APP_OPENID4VCI_EID_CLIENT_URL=http://127.0.0.1:24727/eID-Client
REACT_APP_REGISTERED_CREDENTIAL_ISSUERS_JSON_B64U=W3siY2xpZW50X2lkIjoiZmVkNzk4NjItYWYzNi00ZmVlLThlNjQtODllM2M5MTA5MWVkIiwiY3JlZGVudGlhbF9pc3N1ZXJfaWRlbnRpZmllciI6Imh0dHBzOi8vZGVtby5waWQtaXNzdWVyLmJ1bmRlc2RydWNrZXJlaS5kZS9jIn1d
REACT_APP_TRUST_ANCHOR_CERTS_JSON_B64U=WyAiLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlDZERDQ0FodWdBd0lCQWdJQkFqQUtCZ2dxaGtqT1BRUURBakNCaURFTE1Ba0dBMVVFQmhNQ1JFVXhEekFOQmdOVkJBY01Ca0psY214cGJqRWRNQnNHQTFVRUNnd1VRblZ1WkdWelpISjFZMnRsY21WcElFZHRZa2d4RVRBUEJnTlZCQXNNQ0ZRZ1ExTWdTVVJGTVRZd05BWURWUVFEREMxVFVGSkpUa1FnUm5WdWEyVWdSVlZFU1NCWFlXeHNaWFFnVUhKdmRHOTBlWEJsSUVsemMzVnBibWNnUTBFd0hoY05NalF3TlRNeE1EZ3hNekUzV2hjTk1qVXdOekExTURneE16RTNXakJzTVFzd0NRWURWUVFHRXdKRVJURWRNQnNHQTFVRUNnd1VRblZ1WkdWelpISjFZMnRsY21WcElFZHRZa2d4Q2pBSUJnTlZCQXNNQVVreE1qQXdCZ05WQkFNTUtWTlFVa2xPUkNCR2RXNXJaU0JGVlVSSklGZGhiR3hsZENCUWNtOTBiM1I1Y0dVZ1NYTnpkV1Z5TUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFT0ZCcTRZTUtnNHc1ZlRpZnN5dHdCdUpmLzdFN1ZoUlBYaU5tNTJTM3ExRVRJZ0JkWHlESzNrVnhHeGdlSFBpdkxQM3V1TXZTNmlERWM3cU14bXZkdUtPQmtEQ0JqVEFkQmdOVkhRNEVGZ1FVaVBoQ2tMRXJEWFBMVzIvSjBXVmVnaHl3K21Jd0RBWURWUjBUQVFIL0JBSXdBREFPQmdOVkhROEJBZjhFQkFNQ0I0QXdMUVlEVlIwUkJDWXdKSUlpWkdWdGJ5NXdhV1F0YVhOemRXVnlMbUoxYm1SbGMyUnlkV05yWlhKbGFTNWtaVEFmQmdOVkhTTUVHREFXZ0JUVVZoakFpVGpvRGxpRUdNbDJZcitydThXUXZqQUtCZ2dxaGtqT1BRUURBZ05IQURCRUFpQWJmNVR6a2NRemhmV29Jb3lpMVZON2Q4STlCc0ZLbTFNV2x1UnBoMmJ5R1FJZ0tZa2RyTmYyeFhQalZTYmpXL1UvNVM1dkFFQzVYeGNPYW51c09Ccm9CYlU9XG4tLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tIiBd
```

# Starting the ecosystem

## Start the ecosystem using the local ausweis docker container


Note: Make sure that the Ausweis desktop app is not working

```
node ecosystem.js up --local-ausweis
```


You can skip the --local-ausweis parameter in case you want to use the Ausweis Desktop as your eID Client


# Wallet Frontend Documentation

#### OpenID4VCIHelper
Provides functions to fetch metadata of a specific issuer

#### OpenID4VCIClient
Implements the OpenID4VCI protocol for the client
generateNonceProof parameter gives the freedom to the implementor to select the way to generate the signature. In our case, the local keystore is used.

#### OpenID4VCIClientFactory
Creates instances OpenID4VCIClient instances passing the corresponding client configuration

#### HttpProxy
Delegates all http calls to the wallet backend server to bypass the CORS errors that occur when communicating with authorization servers

#### OpenID4VCIClientStateRepository
Exposes a storage interface to the OpenID4VCIClient for temporary storage operations

![image](https://github.com/user-attachments/assets/63727113-83e9-467b-9890-70970a78d15f)


---

The **useCommunicationProtocols()** react hook is used to make the above instances accessible by the rest of the code wallet application.

Note: The **generateOpenid4vciProof()** keystore function is passed into a callback to the **OpenID4VCIClient** instances in order to generate proofs for the Credential Endpoint in the Credential Issuance flow.

