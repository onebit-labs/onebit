#!/bin/env sh
source env.sh
npx hardhat --network goerli deploy-provider --market Onebit-Lightning-Hunter-USDT --verify
npx hardhat --network goerli register-vault --market Onebit-Lightning-Hunter-USDT
npx hardhat --network goerli register-vault-configurator --market Onebit-Lightning-Hunter-USDT
npx hardhat --network goerli set-vault-admin --market Onebit-Lightning-Hunter-USDT
npx hardhat --network goerli set-vault-operator --market Onebit-Lightning-Hunter-USDT
npx hardhat --network goerli set-emergency-admin --market Onebit-Lightning-Hunter-USDT
npx hardhat --network goerli set-whitelist-duration --market Onebit-Lightning-Hunter-USDT --duration 90
npx hardhat --network goerli init-reserve --market Onebit-Lightning-Hunter-USDT --asset-id USDT --fund-address 0xD1cc56810a3947d1D8b05448afB9889c6cFCF0F1
npx hardhat --network goerli init-next-period --market Onebit-Lightning-Hunter-USDT --management-fee-rate 100 --performance-fee-rate 5000 --purchase-upper-limit 2500000 --soft-upper-limit 2500000 --purchase-begin-timestamp "2022-12-10T00:00:00Z" --purchase-end-timestamp "2022-12-15T00:00:00Z" --redemption-begin-timestamp "2023-03-15T00:00:00Z"
