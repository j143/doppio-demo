DoppioJVM
===============================
[Link to the paper on Doppio and DoppioJVM](paper.pdf)

**DoppioJVM** is a Java Virtual Machine interpreter written in [TypeScript](http://www.typescriptlang.org/) that runs on top of the Doppio runtime system, which is also written in TypeScript. It is able to run unmodified JVM bytecode programs in the browser with *no plugins* and *no server software*.

<a target="_blank" href="doppiojvm/index.html"><h2 style="text-align: center;">Enter the DoppioJVM Online Demo</h2></a>

Below, we provide a guide for fun things you can do with the demo, with pointers to the paper for further information.


### Offline Version

You can grab an offline version of this demo by cloning this git repository. The offline version should reduce execution delay caused by network latency as DoppioJVM downloads individual class files over the network.

```
git clone https://github.com/plasma-umass/doppio-demo
cd doppio-demo
git checkout gh-pages
```

The offline version of this demo requires the following software:

* [NodeJS v0.10](http://nodejs.org/)
* `http-server` npm module
  * Install with `npm install -g http-server` on the command line.
  * Other HTTP server software may work, but this one is far better than e.g. Python's SimpleHTTPServer or Webrick.

To launch the offline version of the demo, merely run `http-server` in the repository folder and navigate to [`http://localhost:8080/`](http://localhost:8080).

DoppioJVM Guide
---------------
DoppioJVM is a Java Virtual Machine interpreter written in JavaScript that runs on top of the Doppio runtime system, which is also written in JavaScript. It is a proof-of-concept of the Doppio runtime system.

This guide contains useful information on the features available to you through the DoppioJVM demo, and some tips for fun things you can do with it. :)


### DoppioJVM Claims

- DoppioJVM can execute **unmodified** JVM bytecode programs in the browser with *no plugins or browser modifications required*. Instead, it runs on top of the JavaScript engine.
- The Doppio runtime system allows DoppioJVM to execute as a series of finite-duration events, allowing long-running programs to function without freezing the browser (§4.1). See the paper for an explanation of the browser's execution model (§3).
- The Doppio runtime system allows DoppioJVM to implement synchronous JVM methods using asynchronous browser APIs (§4.2).
  - For example, the following Java code synchronously opens a file for reading:
    - `FileReader reader = new FileReader(new File("file.txt"));`
  - The Doppio runtime system can suspend the JVM, asynchronously fetch the contents of `file.txt`, and resume the JVM with the file's contents when they become available. The Java program has no idea that this has occurred.
- The Doppio runtime system provides DoppioJVM with multithreading capabilities (§4.3). Note that execution is still single-threaded, but we are able to perform context switches at JVM-specified points.
  - We do not claim that we have implemented JVM threads 100% correctly, but they function well enough in our demos.
- The Doppio runtime system provides DoppioJVM with extensive file system services (§5.1), including:
  - Access to multiple browser-local storage technologies.
  - Access to cloud storage (Dropbox).
  - Access to read-only file downloads provided by the webserver.
  - (New feature; not in paper) The ability to mount zip files into the file system (used for JAR file support in the demo).
- The Doppio runtime system provides DoppioJVM with an emulation of an unmanaged heap, accessible through the `sun.misc.Unsafe` interface (§5.2).
- The Doppio runtime system provides DoppioJVM with TCP socket support (outgoing connections only) using WebSockets (§5.3).

### System Requirements

DoppioJVM has been tested in the latest version of the following desktop browsers:

* (Recommended) Google Chrome
* Firefox
* Safari
* Internet Explorer 10
* Internet Explorer 11

### Overview

The DoppioJVM demo presents a mock terminal interface in the browser for you to work in.

Features:

- Tab autocomplete for commands and some arguments.
- A text editor, accessible via the `edit` command (don't even try using `vim` or `emacs`).
- Ability to navigate the file system and perform basic file operations.
- Upload files from your hard drive into the current directory using the "Upload Files..." button in the upper-right hand corner. 
- Command history (use up and down arrows).
- Half-baked wildcard expansion (good for one wildcard).
- Ability to abort the JVM with CTRL+C.

File system locations:

- `/sys`: (Read-only) Contains the Java Class Library and other system files served up through HTTP.
- `/tmp`: (Home directory) Temporary in-memory storage.
- `/jars`: Used by the `java` command to mount JAR files into the file system. Each JAR file passed to it will be mounted to a subdirectory of this directory.
- `/mnt/localStorage`: Backed by [DOM `localStorage`](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage#localStorage). Persistently stores 5 to 10MB of data, depending on your browser.
- `/mnt/html5fs`: (Chrome and Opera 15+ only) If you accept the prompt below the URL bar, DoppioJVM will mount 50MB of persistent storage using the [HTML5 FileSystem API](https://developer.mozilla.org/en-US/docs/WebGuide/API/File_System).
- `/mnt/dropbox`: Read/write to Dropbox cloud storage. Read more under the "Connect to Dropbox" heading below.

Shortcomings:

- No pipes (sorry)
- Argument parsing is restrictive (no arguments with spaces, no quoted arguments... we just split on spaces)


### Fun Things to Try

#### Compile Java code - in your browser!

Use the `edit` command to write a simple Java program, or upload source files through the "Upload Files" button.

Use the `javac` command to compile your Java files into bytecode. This command invokes an unmodified copy of the Java Compiler from OpenJDK.

Once your files are compiled, use the `java` command to execute them!

#### Upload pre-compiled class files

Since DoppioJVM operates on JVM bytecodes, you can upload unmodified Java 6 classfiles using the "Upload Files..." button and run them in DoppioJVM. This button will upload the selected files into the current directory. Once uploaded, use the `java` command to run your files.

#### Disassemble class files

Use the `javap` command to run an unmodified version of the Java disassembler from OpenJDK using DoppioJVM. You can use this program to view the disassembled bytecode of arbitrary `.class` files.

Here's an example command:

`$ javap -classpath /sys -c -private classes.demo.Fib`

Note that `javap` doesn't accept *files* as input, it accepts *class names*. Thus, `javap -c -private /sys/classes/demo/Fib` will not work.

`javap -help` will provide you with further options.

We also provide our own bytecode disassembler written in JavaScript, which we use for regression testing. This disassembler is accessible via the `disassemble` command.

#### Upload JAR files, and run them

Since DoppioJVM is a bytecode interpreter, it can run unmodified JVM programs straight out of JAR files. Please note that DoppioJVM is Java 6 compatible; Java 7 programs will not function on DoppioJVM.

Use the "Upload Files..." button in the upper-right corner to upload a jar file into the current directory, and then use `java -jar filehere.jar` to run it. You can also use `java -classpath filehere.jar class.to.run` if you want to execute a different class from the JAR file.

Note that we currently don't process any fields in the JAR file's manifest other than its main class, so if you have a complex manifest that sets JVM system properties and adds classpath items, it may not work correctly.

#### Drop into a REPL of a different language

The DoppioJVM demo ships with two JVM language implementations: An implementation of Scheme using Kawa-Scheme, and an implementation of JavaScript using Rhino.

To drop into the Kawa-Scheme repl, use the `kawa` command. You can also use `kawa -f file.sch` to execute a Scheme file in the filesystem.

To drop into the Rhino repl, use the `rhino` command. You can also use `rhino -f file.js` to execute a JavaScript file in the filesystem.

Use CTRL-D to send an EOF when you are in a repl to exit it.

#### Run the benchmarks from the paper

The paper has four benchmarks, which you can run in the demo. Please note that the second run of each benchmark will be much faster than the first due to file caching, so be sure to throw the first run away. :)

- To run the Kawa-Scheme benchmark, use the following command:
  - `time kawa -f /sys/benchmark/kawa/nqueens.sch`.
- To run the Rhino benchmark, use the following commands (this benchmark automatically runs multiple times):
  - `cd /sys/benchmark/rhino/`
  - `rhino -f run.js`.
  - Note that there's a [Rhino bug](https://github.com/int3/doppio/issues/185) where the output of this program is missing newlines. This is an issue with the version of Rhino bundled with our Java Class Library. The non-bundled version, which the native benchmark runner uses, does not have this bug.
- To run the `javap` benchmark, run `time javap_benchmark`.
  - Note that we disable printing to the console during this benchmark. This is intentional.
- To run the `javac` benchmark, run `time javac_benchmark`.

If you wish to compare performance to the Java interpreter like we do in the paper, there is a simple shell script in the `doppiojvm` directory that can run the benchmarks. Note that this will use your native Java installation. In our paper, we compared against an installation of Java 6.

`Usage: ./run-benchmark.sh [kawa|rhino|javap|javac]`

#### Mess around with sockets

DoppioJVM emulates Java's TCP sockets in terms of WebSockets. As a demonstration, we provide a simple TCP server and client with this demo. Here are instructions on how to use it.

Note that you should use the offline DoppioJVM package for this.

- Download and extract [Websockify](https://github.com/kanaka/websockify/archive/v0.5.1.zip) to your computer.
- In the command prompt, enter the `websockify-0.5.1` directory and type `make`.
- Run:
  - `./websockify.py 6789 localhost:6790`
  - (This accepts WebSocket connections on port 6789, and proxies them over a local TCP socket on port 6790)
- In the `doppiojvm` demo directory, run `java classes.demo.TCPServer`
- On the demo webpage, run `java -cp /sys classes.demo.TCPClient`
- Type something in, and press enter. The server will send it back in all caps, the client will print the response, and then the client will exit.

The source code to both programs are in the `classes/demo` directory.

Known bug:

- Sometimes, the client will print `null` and exit. This is due to an interesting `SocketInputStream` behavior; if the socket does not receive data before a specified timeout, `SocketInputReader` assumes that it received an EOF. [Here's the code -- look what happens when `socketRead0` returns 0.](http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/net/SocketInputStream.java#146) :(

#### Store files for later

Any files stored in `/mnt/localStorage` or `/mnt/html5fs` (the latter is only available in Chrome and Opera 15+) will persist in browser-local storage across visits to the demo page. Go ahead and stash some files in there, close the browser, and navigate back to the demo.

#### Connect to Dropbox

**NOTE**: This only works from `https` URLs, *or* from a locally hosted (`http://localhost:8000`) copy.

Doppio's filesystem supports Dropbox cloud storage accounts. Use the `mount_dropbox` command for more information. Note that you will need to use this command a second time after you have logged in to complete the mounting process.

While the demo uses its own API key, you can use your own API key; development keys are free. You must sign up for one at the [Dropbox Application Console](https://www.dropbox.com/developers/apps). Make sure you add the appropriate OAuth Redirect URI (`http://localhost:8080/doppiojvm/index.html` for a locally-served demo). Use the `mount_dropbox` command with no arguments for syntax information.

Once you've connected to Dropbox, navigate to `/mnt/dropbox`. Feel free to create files using the `edit` command, and watch as your native Dropbox client syncs them to your local computer. Or, pop files into the `Apps/DoppioJVM` Dropbox folder, and use `ls` to see them in the DoppioJVM terminal. Note that sometimes Dropbox is slow to sync; check Dropbox's syncing progress in your system tray.

You could even pop some JAR files into the directory and run them in DoppioJVM. Or write+run a Java program to generate files in the directory.

#### Interoperate Java with JavaScript

Here's a fun little program that takes advantage of DoppioJVM's JavaScript API:

```
import java.io.*;
import classes.doppio.JavaScript;

class JavaScriptREPL {
  public static void main(String argv[]) throws Exception {
    String sentence;
    BufferedReader fromUser = new BufferedReader(new InputStreamReader(System.in));
    while(true) {
      sentence = fromUser.readLine();
      if (sentence.length() == 0) {
          break;
      }
      System.out.println(JavaScript.eval(sentence));
    }
  }
}
```

Compile this with `javac -cp /sys JavaScriptREPL.java`, since the `.class` file for the `doppio` API is in the `/sys` folder.

Run the REPL with `java -cp /sys:. JavaScriptREPL`.

Another fun thing you could do: Write a helper function that uses `eval` to evaluate a JavaScript expression, and return a JSON object. You can use one of the [many Java JSON parsers available](http://json.org/java/) to convert the String returned from `eval` into a proper Java object.

### Caveats

Of course, DoppioJVM isn't perfect. Here are some issues you might run into, especially if you are trying new code:

- **Java 7 is not supported**. DoppioJVM is a Java 6 JVM. Attempting to run a Java 7 program will likely result in interesting errors.
- **`java/lang/UnsatisfiedLinkError`**: The Java Class Library has *many* `native` methods that are written in C/C++. [DoppioJVM implements quite a few of them in JavaScript](https://github.com/int3/doppio/blob/master/src/natives.ts), but there are many that we might have missed.
- **I get the error `Cannot get field Ljava/io/FileDescriptor;fd from class Ljava/io/FileDescriptor;`.** You're probably running a program that is attempting to write to read-only storage (e.g. `/sys`). [Doppio isn't properly reporting the error.](https://github.com/int3/doppio/issues/296) Make sure you only write to mutable storage! (e.g. `/tmp` or any of the subdirectories of `/mnt`).
- **DoppioJVM hangs or appears to be doing nothing.** There are many potential causes of this:
  - **Cloud storage**: Reading files from Dropbox is slow.
  - **Remote file downloads**: On the online version of the DoppioJVM demo, the first time each class from the Java Class Library is loaded, DoppioJVM must issue a remote HTTP file download. Check the network tab of your browser's JavaScript debug tools to see if many class files are whizzing by.
  - **DoppioJVM bug**: Bugs happen. Check the JavaScript console in your browser to see if there are any uncaught exceptions.
- **DoppioJVM crashed the browser.** Some potential causes of this are:
  - This might happen if you run a program with a long-running loop that makes no function calls. As we mention in the paper, DoppioJVM only performs a suspend-and-resume check at function call boundaries. We have not encountered programs like this in practice.
  - Opening or interacting with the browser's developer tools while DoppioJVM is running tends to crash the browser. This is especially true of the debug/source code panel.
- **The official Kawa-Scheme JAR file does not work.** Full disclosure: We needed to make a trivial edit to Kawa-Scheme to run it on DoppioJVM, as it makes [an illegal assumption about the bootstrap ClassLoader](https://github.com/int3/doppio/issues/164#issuecomment-15264211) that happens to be true for the HotSpot JVM. Thus, the official JAR file will not function in DoppioJVM. We offer our patched version [here](https://docs.google.com/file/d/0BzhBeckwqxilcDZSendxT2NVYjQ/edit?usp=sharing).
- **I can no longer type commands into the terminal.** Rarely, an unexpected error can cause the demo page to lose the callback that restores your access to the terminal. You'll have to reload the page.
- **The first run of a program is significantly slower than the second.** This is caused by DoppioJVM's current file system setup. Instead of using compressed JAR files for the Java Class Library and our benchmark applications, we use individual class files. Each time DoppioJVM's classloader loads a classfile from the `/sys` folder, it must fetch the class file's contents from the remote server. The file system will cache the file's contents, so subsequent fetches on the second run will be instantaneous.
- **When trying `mount_dropbox`, I get the error `Invalid redirect_uri: u'http://jvilk.github.io/doppio-demo/doppiojvm/index.html'.`** For security reasons, Dropbox doesn't allow you to login to Dropbox from non-`https` URLs (unless the page is served from `localhost`, as is the case for the offline version). Navigate to the `https` version of the URL to fix this.
- **Your site has an invalid SSL certificate.** It sure does! I don't know why. It's something on GitHub's end.

### Reporting Bugs

Please report any bugs you have to our [GitHub issue tracker](https://github.com/int3/doppio/issues). You can also contact the authors directly. Thanks!
