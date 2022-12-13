#!/bin/env sh
source env.sh
npx hardhat --network goerli deploy-provider --market Onebit-Smart-Trend-BTC --verify
npx hardhat --network goerli register-vault --market Onebit-Smart-Trend-BTC
npx hardhat --network goerli register-vault-configurator --market Onebit-Smart-Trend-BTC
npx hardhat --network goerli set-vault-admin --market Onebit-Smart-Trend-BTC
npx hardhat --network goerli set-vault-operator --market Onebit-Smart-Trend-BTC
npx hardhat --network goerli set-emergency-admin --market Onebit-Smart-Trend-BTC
npx hardhat --network goerli set-whitelist-duration --market Onebit-Smart-Trend-BTC --duration 90
npx hardhat --network goerli init-reserve --market Onebit-Smart-Trend-BTC --asset-id WBTC --fund-address 0xD1cc56810a3947d1D8b05448afB9889c6cFCF0F1
npx hardhat --network goerli init-next-period --market Onebit-Smart-Trend-BTC --management-fee-rate 100 --performance-fee-rate 3000 --purchase-upper-limit 1000 --soft-upper-limit 1000 --purchase-begin-timestamp "2022-12-10T00:00:00Z" --purchase-end-timestamp "2022-12-15T00:00:00Z" --redemption-begin-timestamp "2023-03-15T00:00:00Z"
