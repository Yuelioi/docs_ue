线性插值

基于 alpha 混合 A B 的值。

alpha == 0 ： return A
0< alpha < 1: A B 过渡
alpha == 1 ： return B

![[../../../../_Config/Attatchment/Pasted image 20220418033448.png]]

A = 10, B=20, alpha =0.5  返回 15

越界：会按照线性比例取值。上例 alpha = -2，返回 -10

