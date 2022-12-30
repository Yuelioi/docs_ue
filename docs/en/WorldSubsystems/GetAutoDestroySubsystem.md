# GetAutoDestroySubsystem

Get Auto Destroy Subsystem (World Subsystem)

The Auto destroy subsystem manages actors who have bAutoDestroyWhenFinished. set as true. This ensures that even actors who do not have Tick enabled. get properly destroyed, as well as decouple this behavior from AActor::Tick

## 图示

![]($-20221218-21374301.png)

## Inputs

## Outputs

Return Value: Auto Destroy Subsystem Object Reference.

