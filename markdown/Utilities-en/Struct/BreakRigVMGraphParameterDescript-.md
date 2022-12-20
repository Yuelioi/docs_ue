# BreakRigVMGraphParameterDescript-

Adds a node that breaks a 'RigVMGraphParameterDescription' into its member fields

## 图示

![]($-20221218-14421236.png)

## Inputs

Rig VMGraph Parameter Description: Rig VMGraph Parameter Description Structure (by ref).  

## Outputs

Name: Name. Name:. The name of the parameter.

Is Input: Boolean. Is Input:. True if the parameter is an input.

CPPType: String. CPPType:. The C++ data type of the parameter.

CPPType Object: Object Reference. CPPType Object:. The Struct of the C++ data type of the parameter (or nullptr).

Default Value: String. Default Value:. The default value of the parameter.

