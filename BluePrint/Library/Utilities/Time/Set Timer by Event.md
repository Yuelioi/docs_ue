设置定时器来执行委托。设置现有定时器将用更新后的参数来重设定时器。
目标是 Kismet 系统库

![[../../../../../_Config/Attatchment/Pasted image 20220507165825.png]]

Looping：循环

Intial Start Dely：初始延迟时间

Initial Start Delay Variance：初始延迟时间方差（应该是随机初始化延迟）

返回 time handle。

## 如何销毁

可以把返回值提升为变量，后续使用 [[Clear and Invalidate Timer by Handle]]


## 示例 定时器事件

5+ 3 秒后打印一次，之后每隔 3 秒打印一次

![[../../../../../_Config/Attatchment/Pasted image 20220507170106.png]]