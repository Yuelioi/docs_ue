# BuildString_boolean

Converts a boolean->string, creating a new string in the form AppendTo+Prefix+InBool+Suffix

Target is Kismet String Library

## 图示

![]($-20221218-14291785.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Bool: Boolean. The bool value to convert. Will add "true" or "false" to the conversion string.

Suffix: String. A suffix to append to the end of the conversion string.  

## Outputs

Return Value: String. A new string built from the passed parameters.

