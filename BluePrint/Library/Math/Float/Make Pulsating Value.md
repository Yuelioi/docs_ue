创建脉冲标量值的简单函数（非线性 01 波动）

![[../../../../../_Config/Attatchment/Pasted image 20220425180850.png]]


In Current Time：当前绝对时间

In Pulses Per Second ：一秒冲几下

In Phase：0.0~1.0 偏移当前时间，让脉冲更早/更晚开始

---

大概这样

0.6 0.09
0.7 0.34
0.8 0.65
0.9 0.90

1.6 也返回 0.09

1.6 + phase=0.1 → 1.7（0.34）

![[../../../../../_Config/Attatchment/Pasted image 20220425182137.png]]

示例：基于游戏时间的脉冲

![[../../../../../_Config/Attatchment/Pasted image 20220425183052.png]]

