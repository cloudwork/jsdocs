var args = system.args,
    print = system.print;
    config = {},
    runTests = false;

/**
 * Prints usage instructions
 */
function printUsage() {
    return print('Usage: jsdocs [options] [files/dirs containing sources separated by \':\']\n\n\
    JSDocs options:\n\
      -t, --template            Required. Use this template to format the output.\n\
      -a, --all                 Include all functions, even undocumented ones.\n\
      -c, --conf                Configuration file path.\n\
      -d, --destination         Output directory path (defaults to \'out\').\n\
      -D, --define              Define a variable, available in JSDocs as JSDOC.opt.D.myVar\n\
      -e, --encoding            Use this encoding to read and write files.\n\
      -n, --nocode              Ignore all code, only document comments with @name tags.\n\
      -l, --log                 Print log messages to a file (defaults to stdout).\n\
      -p, --private             Include symbols tagged as private, underscored and inner symbols.\n\
      -r, --recurse             Depth. Descend into src directories.\n\
      -s, --suppress            Suppress source code output.\n\
      -T, --test                Run all unit tests and exit.\n\
      -v, --verbose             Provide verbose feedback about what is happening.\n\
      -x, --ext                 Scan source files with the given extension/s separated by \':\' (defaults to js).\n\
      -h, --help                Show this message');
};
/**
 * Analizes passed params and calls document generator
 * passing the arguments.
 */
function main() {
    while (args.length) {
        var arg = args.shift();
        switch (arg) {
            case '-t' :
            case '--template' :
                config.templatePath = args.shift();
                break;
            case '-a' :
            case '--all' :
                config.includeUndocumented = true;
                break;
            case '-c':
            case '--conf':
                config.configPath = args.shift();
                break;
            case '-d':
            case '--destination':
                config.destinationPath = args.shift();
                break;
            case '-e':
            case '--encoding':
                config.encoding = args.shift();
                break;
            case '-n':
            case '--nocode':
                config.nocode = true;
                break;
            case '-l':
            case '--log':
                config.log = args.shift();
                break;
            case '-p':
            case '--private':
                config.IncludePrivates = true;
                break;
            case '-r':
            case '--recurse':
                config.depth = parseInt(args.shift());
                break;
            case '-s':
            case '--suppress':
                // TODO
                break;
            case '-T':
            case '--test':
                runTests = true;
                break;
            case '-v':
            case '--verbose':
                config.verbose = true;
                break;
            case '-x':
            case '--ext':
                config.fileExtensions = args.shift().split(':');
                break;
            case '-h' :
            case '--help' :
                return printUsage();
                break;
            case '--debug' :
                system.debug = true;
                system.log.level = 4;
                system.log.debug('Debug mode is used');
                break;
            case '--version' :
                return print('JSDocs 0.1');
                break;
            default :
                if (arg.charAt(0) === '-') return printUsage();
                else config.sourcesPaths = arg.split(':');
        }
    }
    //try {
        if (runTests) require('jsunity/tester')
            .run([require('packages').catalog['jsdocs'].directory], config.verbose);
        else if (config.sourcesPaths) require('./jsdocs').document(config);
        else return printUsage();
    //} catch (e) {
    //    print('ERROR: ' + e.message);
    //}
};

main();