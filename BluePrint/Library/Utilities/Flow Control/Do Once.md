## Do Once

只执行一次。除非调用重置函数，否则不可再用

比如控制技能释放，放完只能等冷却

判断是否到达冷却时间（5 秒），到达就可以释放技能

![[../../../../../_Config/Attatchment/Pasted image 20220412230654.png]]

释放后，CD 重置为 0，添加 delay，如果 CD 小于 5，每 0.5 秒+0.5，直至重置 Do Once

![[../../../../../_Config/Attatchment/Pasted image 20220412230704.png]]