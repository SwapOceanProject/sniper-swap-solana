## ⚠️ Warning

Any content produced by Solana, or developer resources that Solana provides, are for educational and inspiration purposes only.  Solana does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.

## Server Requirements

we recommend Digital Ocean servers, Open account and get $100 credits click here : https://bit.ly/30HxxIf

* login your digital ocean account and create new Droplet, from "Choose an image" click "Marketplace" and select "Node JS on Ubuntu 20.04" 
* Fill the other fields and click "Create Droplet"

## Installation

We can install it for you for only $50 , if you like click here : https://bit.ly/3jRHIAK

* Click your Droplet
* Click "Access" and from access page click the button "Launch Droplet Console"
* from your console excute the following commands

sudo ufw enable

sudo ufw allow 5000

sudo ufw status

sudo apt-get update

sudo apt-get install git

cd ../var/www/html

git clone https://github.com/SniperProject/sniper-swap-solana.git

cd sniper-swap-solana

npm install @craco/craco --save

npm install -g serve

npm install -g pm2

npx browserslist@latest --update-db

npm run build

pm2 serve build 5000 --spa 


That is all 

Live Sample : http://sol.sniperswap.com:5000


## Deployment

App is using to enviroment variables that can be set before deployment:
* `SWAP_PROGRAM_OWNER_FEE_ADDRESS` used to distribute fees to owner of the pool program (Note: this varibale reuqires special version of token-swap program)
* `SWAP_HOST_FEE_ADDRESS` used to distribute fees to host of the application

To inject varibles to the app, set the SWAP_PROGRAM_OWNER_FEE_ADDRESS and/or SWAP_HOST_FEE_ADDRESS environment variables to the addresses of your SOL accounts.

You may want to put these in local environment files (e.g. .env.development.local, .env.production.local). See the documentation on environment variables for more information.

NOTE: remember to re-build your app before deploying for your referral addresses to be reflected.