BEEFY = node_modules/.bin/beefy
BROWSERIFY = node_modules/.bin/browserify

all: js

$(BEEFY):
	npm install beefy

$(BROWSERIFY):
	npm install browserify

js: $(BROWSERIFY)
	$(BROWSERIFY) scripts/main.js > scripts/bundle.js

watch: $(BEEFY)
	$(BEEFY) scripts/main.js:scripts/bundle.js --live





