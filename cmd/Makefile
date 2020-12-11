GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOGET=$(GOCMD) get
BINARY_NAME=treesum
BINARY_UNIX=$(BINARY_NAME)_unix
DIST_DIR=../dist

all: test build

compile:
	$(GOBUILD) -o $(BINARY_NAME).so -buildmode=c-shared main.go
	mkdir $(DIST_DIR)
	mv $(BINARY_NAME).so $(DIST_DIR)

compile-linux:
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(GOBUILD) -o $(BINARY_NAME).so -buildmode=c-shared main.go

clean: 
	$(GOCLEAN)
	rm -f $(BINARY_NAME)
	rm -f $(BINARY_UNIX)
	rm -rf $(DIST_DIR)

run:
	$(GOBUILD) -o $(BINARY_NAME) -v ./...
	./$(BINARY_NAME)