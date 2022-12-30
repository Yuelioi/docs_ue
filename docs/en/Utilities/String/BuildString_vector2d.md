# BuildString_vector2d

Converts a vector2d->string, creating a new string in the form AppendTo+Prefix+InVector2d+Suffix

Target is Kismet String Library

## 图示

![]($-20221218-14292577.png)

## Inputs

Append To: String. An existing string to use as the start of the conversion string.

Prefix: String. A string to use as a prefix, after the AppendTo string.

In Vector 2d: Vector 2D Structure. The vector2d value to convert. Uses the standard FVector2D::ToString conversion.

Suffix: String. A suffix to append to the end of the conversion string.  

## Outputs

Return Value: String. A new string built from the passed parameters.

