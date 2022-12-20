https://www.youtube.com/watch?v=H8DI0I0L54U&list=PLSlkDq2rO1t4-nlNEbALfsxtOdNfc9goo&index=11

将数值与最近的网格乘数对齐。（四舍五入到相邻网格倍数）

位置=5.1，GridSize=10.0：返回数值=10.0 （5 也是返回 10）

GridSize 为 0，则返回位置若 GridSize 过小，可能会引发准确性问题。

![[../../../../../_Config/Attatchment/Pasted image 20220425185302.png]]



使用 [[../../Game/Player/Get Hit Result Under Cursor for Objects|Get Hit Result Under Cursor for Objects]] 获取鼠标位置

并且把 [[../../Collision/Break Hit Result|Break Hit Result]] , 然后对齐到网格。

可以搞建筑对齐

![[../../../../../_Config/Attatchment/Pasted image 20220425190242.png]]

![[../../../../../_Config/Attatchment/Pasted image 20220425190529.png]]