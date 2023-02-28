# EasyOptions

EasyOptions allows you to write the help text for your program _only once_, and have the described options _automatically parsed_ from command line into easily readable variables, _without complicated API_. EasyOptions was developed after discontentment with the existing solutions for option parsing in Bash. It was conceived with the following guidelines in mind:

- Avoid duplication of source code documentation, help text and options specification.
- Have the option values parsed into easily readable variables.
- Have the non-option arguments available on a simple, separate array.
- Usage as simple as one single line of code.

EasyOptions is going to parse all of your options and arguments automatically once sourced. You specify what options are supported by your program by simply writing a help text, using special double-hash comments. This help text also works at the same time as source code documentation and options specification. All client scripts have an automatic `--help` option, which is going to display such documentation. You can see more details, specially about the options specification, in the help text of EasyOptions itself.

## Usage

For using EasyOptions in your script, simply document it using double-hash comments like this:

```bash
## Program Name v1.0
## Copyright (C) Someone
## Licensed under XYZ
##
## This program does something with the arguments. Usage:
##     @script.name [option] ARGUMENTS...
##
## Options:
##     -h, --help              All client scripts have this, it can be omitted.
##     -o, --some-option       This is a boolean option. Long version is
##                             mandatory, and can be specified before or
##                             after short version.
##         --some-boolean      This is a boolean option without a short version.
##         --some-value=VALUE  This is a parameter option. When calling your script
##                             the equal sign is optional and blank space can be
##                             used instead. Short version is not available in this
##                             format.
```

The above comments work both as source code documentation and as help text, as well as define the options supported by your script. There is no duplication of the options specification. The string `@script.name` will be replaced with the actual script name. Now you only need to call EasyOptions in your script and _that's it_!

### Using Arguments

After writing your documentation, you simply source this script. Then all command line options will get parsed into the corresponding variables. You can then check their values for reacting to them. Regular arguments will be available in the `$arguments` array. You can source `easyoptions.sh` for a pure Bash implementation. Here is an example for parsing the comments above:

```bash
ROOT=$(dirname "$0")
source "${ROOT}/easyoptions.sh" || exit # Bash implementation, slower

# Boolean and parameter options
[[ -n "$some_option" ]] && echo "Option specified: --some-option"
[[ -n "$some_boolean" ]] && echo "Option specified: --some-boolean"
[[ -n "$some_value" ]] && echo "Option specified: --some-value is $some_value"

# Arguments
for argument in "${arguments[@]}"; do
    echo "Argument specified: $argument"
done
```

If using the pure Bash implementation, then for better speed you may want to define the options in source code yourself, so they do not need to be parsed from the documentation. The side effect is that when changing them, you will need to update both the documentation and the source code. You define the options statically like this:

```bash
options=(o=option some-boolean some-value=?)
```
