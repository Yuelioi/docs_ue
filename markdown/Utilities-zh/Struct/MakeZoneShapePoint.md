# MakeZoneShapePoint

添加一个节点，从其成员中创建一个 "ZoneShapePoint"。

## 图示

![]($-20221218-15050893.png)

## Inputs

位置。矢量。位置：。该点的位置。

切线长度。Float（单精度）。切线长度：。贝塞尔点切线的长度，或缓存的车道轮廓的半宽。

内转半径。Float（单精度）。内部转弯半径：。与此点相关的内转半径。当多边形形状的路由被设置为 "弧形 "时使用。

旋转。旋转器。旋转：。点的旋转。旋转的前进方向与切线相匹配。对于车道轮廓点，前进方向指向形状，这样我们就可以匹配传入车道的旋转。

类型。FZoneShapePointType枚举。类型：。控制点的类型。

车道简介。字节。Lane Profile:.指向外部数组的索引，指的是车道轮廓，如果我们应该使用Shape的车道轮廓，则是FZoneShapePoint::InheritLaneProfile。这是一个有点尴尬的间接性，但可以控制点的内存使用。

反向车道轮廓。Boolean.Reverse Lane Profile（反转车道轮廓）：。车道轮廓应被反转的真值。

车道连接限制。Bitmask Integer.Lane Connection Restrictions:.车道连接限制。  

## Outputs

区域形状点。区域形状点结构。
