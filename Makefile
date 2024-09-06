# Makefile

.PHONY: clean install build deploy

# Clean the build and node_modules directories
clean:
	rm -rf dist
	rm -rf node_modules

# Reinstall dependencies
install:
	npm install

# Build the TypeScript project
build:
	npm run build

# Deploy using Serverless
deploy: clean install build
	serverless deploy
