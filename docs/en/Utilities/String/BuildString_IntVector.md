# BuildString_IntVector

Converts an IntVector->string, creating a new string in the form AppendTo+Prefix+InIntVector+Suffix

Target is Kismet String Library

## 图示

![]($-20221218-14292047.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Int Vector: Int Vector Structure. The intVector value to convert. Uses the standard FVector::ToString conversion.

Suffix: String. A suffix to append to the end of the conversion string.  

## Outputs

Return Value: String. A new string built from the passed parameters.

