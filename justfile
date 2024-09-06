set shell := ["bash", "-uc"]

# runs the UI in development mode
run:
    #!/usr/bin/env bash
    cd frontend
    npm run dev -- --host=0.0.0.0


# build wasm frontend modules
build-wasm:
    #!/usr/bin/env bash

    cd wasm-modules
    rm -rf ../frontend/src/lib/wasm/*
    wasm-pack build -d ../frontend/src/lib/wasm --no-pack


# builds the frontend and exports to static html
#build-ui: build-wasm
build:
    #!/usr/bin/env bash
    cd frontend
    npm run build
