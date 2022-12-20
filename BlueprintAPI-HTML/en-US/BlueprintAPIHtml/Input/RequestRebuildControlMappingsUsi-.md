# RequestRebuildControlMappingsUsi-

Flag all enhanced input subsystems making use of the mapping context for reapplication of all control mappings at the end of this frame.

Target is Enhanced Input Library

## 图示

![]($-20221218-19292346.png)

## Inputs

In: Exec.

Context: Input Mapping Context Object Reference. Mappings will be rebuilt for all subsystems utilizing this context..

Force Immediately: Boolean. The mapping changes will be applied synchronously, rather than at the end of the frame, making them available to the input system on the same frame..  

## Outputs

Out: Exec.

