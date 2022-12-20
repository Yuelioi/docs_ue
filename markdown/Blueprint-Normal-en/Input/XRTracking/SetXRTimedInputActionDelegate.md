# SetXRTimedInputActionDelegate

Hook up a delegate to get an OpenXR action event with action time.. For a boolean input the the 'value' parameter of the delegate will be 1.0 for a press and 0.0 for a release. For an analog input the value's range is action and platform specific.. Use in combination with GetControllerTransformForTime for potentially improved temporal transform precision and velocity data.. "Left Grip" is an example of a valid ActionName.. Note: this is likely to be replaced by native support for event times in the core input system at some time in the future.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19302447.png)

## Inputs

In: Exec.

Action Name: Name (by ref).

In Delegate: Delegate (by ref).  

## Outputs

Out: Exec.

