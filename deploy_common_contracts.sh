#!/bin/env sh
source env.sh && \
npx hardhat --network goerli deploy-registry --verify && \
npx hardhat --network goerli deploy-reserve-logic --verify && \
npx hardhat --network goerli deploy-vault-impl --verify && \
npx hardhat --network goerli deploy-vault-configurator-impl --verify && \
npx hardhat --network goerli deploy-otoken --verify && \
npx hardhat --network goerli deploy-timelocked-executor --verify --role Owner && \
npx hardhat --network goerli deploy-timelocked-executor --verify --role VaultAdmin && \
npx hardhat --network goerli deploy-timelocked-executor --verify --role PortfolioManager
