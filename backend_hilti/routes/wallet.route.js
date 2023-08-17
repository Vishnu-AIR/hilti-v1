const WalletRoutes = require('express').Router();
const WalletController = require('../controller/wallet.controller');

WalletRoutes.post("/", WalletController.createWalletRequest);
WalletRoutes.post("/adminonly/:id", WalletController.updateWallet);

WalletRoutes.get("/", WalletController.fetchAllWalletRequest);


module.exports = WalletRoutes;