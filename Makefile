default: install

build: clean
	@echo Building...
	npm run build

clean:
	rm -rf build

install:
	@echo Installing dependencies...
	npm install