# GetSmartObjectComponent

Returns the component associated to the claim handle if still

  1. In some scenarios the component may no longer exist. but its smart object data could (e.g. streaming)





Target is Smart Object Subsystem

## 图示

![]($-20221218-20592312.png)

## Inputs

Target: Smart Object Subsystem Object Reference.

Claim Handle: Smart Object Claim Handle Structure (by ref). Valid handle to a claimed smart object slot.  

## Outputs

Return Value: Smart Object Component Object Reference. A pointer to the USmartObjectComponent* associated to the handle..

