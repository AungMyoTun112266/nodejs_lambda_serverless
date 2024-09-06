# Remove the build and node_modules directories
rm -rf dist
rm -rf node_modules

# Reinstall dependencies
npm install

# Rebuild the TypeScript project
npm run build

# Deploy again
serverless deploy
