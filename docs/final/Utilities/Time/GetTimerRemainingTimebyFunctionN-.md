# GetTimerRemainingTimebyFunctionN-

返回到定时器下次执行其委托的时间。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-15244476.png)

## Inputs

对象。对象参考。实现委托功能的对象。默认为自我（此蓝图）。

函数名称。字符串。委托函数名称。可以是一个 K2 函数或一个自定义事件。

## Outputs

返回值。Float（单精度）。定时器的当前迭代还剩多长时间。

<hr>

Returns time until the timer will next execute its delegate.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-15244476.png)

## Inputs

Object: Object Reference. Object that implements the delegate function. Defaults to self (this blueprint).

Function Name: String. Delegate function name. Can be a K2 function or a Custom Event..

## Outputs

Return Value: Float (single-precision). How long is remaining in the current iteration of the timer..
