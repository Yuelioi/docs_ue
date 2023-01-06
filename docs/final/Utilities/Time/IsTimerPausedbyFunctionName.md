# IsTimerPausedbyFunctionName

如果存在计时器并且暂停了给定的委托，则返回true，否则返回false。

目标是Kismet系统库

## 图示

![]($-20221218-15245164.png)

## Inputs

对象。对象参考。实现委托功能的对象。默认为自我（此蓝图）。

函数名称。字符串。委托函数名称。可以是一个K2函数或一个自定义事件。  

## Outputs

返回值。布尔值。如果定时器存在并且暂停，则为真。

Returns true if a timer exists and is paused for the given delegate, false otherwise.

Target is Kismet System Library

## 图示

![]($-20221218-15245164.png)

## Inputs

Object: Object Reference. Object that implements the delegate function. Defaults to self (this blueprint).

Function Name: String. Delegate function name. Can be a K2 function or a Custom Event..  

## Outputs

Return Value: Boolean. True if the timer exists and is paused..

