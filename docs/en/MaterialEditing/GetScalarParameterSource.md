# GetScalarParameterSource

Returns the path of the asset where the parameter originated, as well as true/false if it was found

Target is Material Editing Library

## 图示

![]($-20221218-19463662.png)

## Inputs

In: Exec.

Material: Material Interface Object Reference. The material or material instance you want to look up a parameter from.

Parameter Name: Name. The parameter name.  

## Outputs

Out: Exec.

Parameter Source: Soft Object Path Structure. The soft object path of the asset the parameter originates in.

Return Value: Boolean. Whether or not the parameter was found in this material.

