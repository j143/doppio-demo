Doppio Demo
===========

Demo of the Doppio Runtime System. [Click here to enter the demo.](https://plasma-umass.github.io/doppio-demo)

Links:

* [Source code of DoppioJVM](https://github.com/plasma-umass/doppio)
* [Source code of BrowserFS](https://github.com/jvilk/BrowserFS)

## Building the Demo

Prerequisites: Clone [DoppioJVM](https://github.com/plasma-umass/doppio) somewhere, build it, and `npm link` it.

To build the demo, run:

    npm install
    npm link doppiojvm
    grunt

Serve the demo direct from the `build/` directory:

    cd build
    http-server  # or any other file server

Or copy the `build` directory's contents to the desired location on your webserver.

