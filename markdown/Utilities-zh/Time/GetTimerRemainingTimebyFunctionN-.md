# GetTimerRemainingTimebyFunctionN-

Returns time until the timer will next execute its delegate.

Target is Kismet System Library

## 图示

![]($-20221218-15244476.png)

## Inputs

Object: Object Reference. Object that implements the delegate function. Defaults to self (this blueprint).

Function Name: String. Delegate function name. Can be a K2 function or a Custom Event..  

## Outputs

Return Value: Float (single-precision). How long is remaining in the current iteration of the timer..

