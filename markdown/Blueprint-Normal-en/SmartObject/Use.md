# Use

Start using a claimed smart object slot.

Target is Smart Object Subsystem

## 图示

![]($-20221218-20593010.png)

## Inputs

In: Exec.

Target: Smart Object Subsystem Object Reference.

Claim Handle: Smart Object Claim Handle Structure (by ref). Handle for given pair of user and smart object. Error will be reported if the handle is invalid..

Definition Class: Smart Object Behavior Definition Class Reference (by ref). The type of behavior definition the user wants to use..  

## Outputs

Out: Exec.

Return Value: Smart Object Behavior Definition Object Reference. The base class pointer of the requested behavior definition class associated to the slot.

