# WaitforCompletion_Message

Wait for scan to be complete. If called during editor startup before OnPostEngineInit, and there are any assets that use classes in. not-yet-loaded plugin modules, WaitForCompletion will return silently with those assets still ungathered.

Target is Asset Registry

## 图示

![]($-20221218-18011809.png)

## Inputs

In: Exec.

Target: Object Reference.  

## Outputs

Out: Exec.

