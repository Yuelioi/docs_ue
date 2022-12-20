# BuildString_object

Converts a object->string, creating a new string in the form AppendTo+Prefix+object name+Suffix

Target is Kismet String Library

## 图示

![]($-20221218-14292311.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Obj: Object Reference. The object to convert. Will insert the name of the object into the conversion string.

Suffix: String. A suffix to append to the end of the conversion string.  

## Outputs

Return Value: String. A new string built from the passed parameters.

