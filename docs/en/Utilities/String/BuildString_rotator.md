# BuildString_rotator

Converts a rotator->string, creating a new string in the form AppendTo+Prefix+InRot+Suffix

Target is Kismet String Library

## 图示

![]($-20221218-14292399.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Rot: Rotator. The rotator value to convert. Uses the standard ToString conversion.

Suffix: String. A suffix to append to the end of the conversion string.  

## Outputs

Return Value: String. A new string built from the passed parameters.

