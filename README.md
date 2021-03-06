JSDocs is javascript documentation generator written in JavaScript (Under Development)
==================================================

JSDocs is a port of jsdoc-toolkit. The main goal of the project is to decouple it from Rhino and use Narwhal, the JavaScript standard library conforming to the [ServerJS standard](https://wiki.mozilla.org/ServerJS) instead. It will provide a simple way for server-side Javascript environments to generate documentation without any deployment costs or dependencies on other libraries or runtimes. JSDocs will be available as standard JavaScript packages jspkg, which will make it easy to install/deploy it using [getjs](http://github.com/dangoor/getjs) or whichever will be the standard JavaScript package management system. The project hopes to get as much external collaboration as possible, in order to have a powerful cross platform documentation tool. 

Current state
---------------- 

Currently the project is under development and it is not heavily tested, but seems to be working. The code ported from jsdocs-toolkit is very messy and it was not designed for modular systems conforming [Securable Modules specification](https://wiki.mozilla.org/ServerJS/Modules/SecurableModules), therefore a major refactoring still has to be done. The template system is likely to be changed as it is really tied to the model now. Everyone is more than welcome to help with it!

Demo pages
-----------------
[documentation](http://gozala.github.com/bespinserv/docs/bespinserv+lib+bespinserv+model.js@User.html)
[source](http://gozala.github.com/bespinserv/docs/bespinserv+lib+bespinserv+model.js.html#line-186)


Getting Started
---------------

The current implementation uses Narwhal. Narwhal is a JavaScript Standard Library (based on the ServerJS standard: https://wiki.mozilla.org/ServerJS) and is located at http://github.com/tlrobinson/narwhal/

To start working with JSDoc, checkout the Narhwal and JSDoc repositories and add narwhal/bin to your PATH environment variable (e.x. "export PATH=$PATH:narwhal/bin"). Currently you need to use relative path symlinks to integrate with Narwhal.

1. cd narwhal/packages/ 
   ln -s ../../jsdocs jsdocs 

2. cd ../bin
   ln -s ../../jsdocs/bin/jsocs jsdocs

After that you should be able to run tool by typing:

  jsdocs -t jsdocs/templates/jsdoc/ bespinserv/lib/

-t points to the folder with template to be used. In the root of the repository you can find the templates/ folder with a jsdoc/ subfolder. Thats an example of a template (jsdoc-toolkit templates are not compatible).
The second argument is the path to folder containing sources that will be documented. 

For more additional info run:

  jsdocs --help

Contributors
------------

* Irakli Gozalishvili

