# SetTimerforNextTickbyFunctionNam-

Set a timer to execute a delegate on the next tick.

Target is Kismet System Library

## 图示

![]($-20221218-15245943.png)

## Inputs

In: Exec.

Object: Object Reference. Object that implements the delegate function. Defaults to self (this blueprint).

Function Name: String. Delegate function name. Can be a K2 function or a Custom Event..  

## Outputs

Out: Exec.

Return Value: Timer Handle Structure. The timer handle to pass to other timer functions to manipulate this timer..

