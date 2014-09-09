BEEFY = node_modules/.bin/beefy
BROWSERIFY = node_modules/.bin/browserify

all: js

node_modules:
	npm install

$(BEEFY):
	npm install beefy

$(BROWSERIFY):
	npm install browserify

js: $(BROWSERIFY) node_modules
	$(BROWSERIFY) scripts/main.js > scripts/bundle.js

watch: $(BEEFY) node_modules
	$(BEEFY) scripts/main.js:scripts/bundle.js --live





