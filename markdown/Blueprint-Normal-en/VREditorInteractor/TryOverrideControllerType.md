# TryOverrideControllerType

Temporary set what controller type this is for asymmetric control schemes.. You can't override the controller type when there's already an override.. Remove the temporary controller type with EControllerType::Unknown

Target is VREditor Interactor

## 图示

![]($-20221218-21320399.png)

## Inputs

In: Exec.

Target: VREditor Interactor Object Reference.

In Controller Type: EControllerType Enum.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the controller type was changed.

