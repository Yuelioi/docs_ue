# SetTimerbyEvent

设置一个定时器来执行委托。设置一个现有的定时器将用更新的参数重置该定时器。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-15245684.png)

## Inputs

在。执行。

事件：代表。

时间。浮点数（单精度）。在执行委托前要等待多长时间，单位是秒。将定时器设置为<=0 秒，如果它被设置为<=0 秒，将清除它。

循环。布尔值。为 "真"，每隔一段时间持续执行委托，为 "假"，只执行一次委托。

初始启动延时。Float (single-precision).传递给定时器管理器的初始延迟，单位是秒。

初始启动延迟差异。Float（单精度）。用它来给定时器的启动时间增加一些变化，以代替对 InitialStartDelay 输入的随机范围，单位是秒。

## Outputs

出：执行。

返回值。定时器手柄结构。定时器句柄，传递给其他定时器函数来操作这个定时器。

<hr>

Set a timer to execute delegate. Setting an existing timer will reset that timer with updated parameters.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-15245684.png)

## Inputs

In: Exec.

Event: Delegate.

Time: Float (single-precision). How long to wait before executing the delegate, in seconds. Setting a timer to <= 0 seconds will clear it if it is set..

Looping: Boolean. True to keep executing the delegate every Time seconds, false to execute delegate only once..

Initial Start Delay: Float (single-precision). Initial delay passed to the timer manager, in seconds..

Initial Start Delay Variance: Float (single-precision). Use this to add some variance to when the timer starts in lieu of doing a random range on the InitialStartDelay input, in seconds..

## Outputs

Out: Exec.

Return Value: Timer Handle Structure. The timer handle to pass to other timer functions to manipulate this timer..
