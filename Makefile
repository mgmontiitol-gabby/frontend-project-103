install: 
	npm ci

lint:
	./node_modules/.bin/eslint .

test:
	npm test

test-coverage:
	npm run test-coverage