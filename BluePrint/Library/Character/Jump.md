https://youtu.be/34ZQmxyumoM?list=PLSlkDq2rO1t6iqA1vlUYirOCCN_2ZioB0

使角色在下次更新时跳跃。
如果需要角色根据按住跳跃键的时间进行跳跃则可将JumpMaxHoldTime设为非零值。这种情况下需要停止应用跳跃的Z轴速度时（如在上按键事件中）必须调用StopJumping0，否则角色将继续接收速度直到JumpKeyHoldTime到达JumpMaxHoldTime.
目标是 Character


角色蓝图中

![[../../../../_Config/Attatchment/Pasted image 20220429044153.png]]

类默认值-细节设置

![[../../../../_Config/Attatchment/Pasted image 20220429044257.png]]

其他设置

![[../../../../_Config/Attatchment/Pasted image 20220429044511.png]]

![[../../../../_Config/Attatchment/Pasted image 20220429044555.png]]

