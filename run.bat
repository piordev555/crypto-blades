rm -r build
npm run contract:prepare
rm -r build/contracts
npm run contract:deploy
npm run start:frontend