# Clone


```
git clone --recurse-submodules git@github.com:gunet/funke-wallet-ecosystem.git
```

# Branches

- funke-wallet-ecosystem --> master
- ausweissapp-client --> master
- funke-wallet-backend-server --> funke
- funke-wallet-frontend --> funke

# Starting the ecosystem

## Start the ecosystem using the local ausweis docker container


Note: Make sure that the Ausweis desktop app is not working

```
node ecosystem.js up --local-ausweis
```

You can skip the --local-ausweis parameter in case you want to use the Ausweis Desktop as your eID Client
