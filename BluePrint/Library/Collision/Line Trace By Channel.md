https://www.bilibili.com/video/av883691733/

沿给定的线执行碰撞检测，并返回首个阻挡命中。此检测将找到响应给定 TraceChannel 的对象

## 展示

![[../../../../_Config/Attatchment/Pasted image 20220509183554.png]]

![[../../../../_Config/Attatchment/Pasted image 20220509182429.png]]

## 参数

### 输入

start 、end：射线起点终点

TraceChannel ：追踪通道，跟碰撞预设那个一样。分为可视性与通道（Camera 是系统自带的通道）

通道在项目设置-碰撞-新建追踪通道。可视性就是肉眼可视

![[../../../../_Config/Attatchment/Pasted image 20220509182245.png]]

trace complex：对复杂碰撞进行测试时为 true（消耗更高性能），简化碰撞为 false。

actors to ignore：忽略的碰撞对象

draw debug typed：debug 时绘制方式。1 帧、持续时间、一直、不绘制

后面都是射线样式

### 输出

- 是否命中（布尔）
- 命中结果（结构体）

![[../../../../_Config/Attatchment/Pasted image 20220509184701.png]]

| 英文            | 中文            |
| --------------- | --------------- |
| Blocking Hit    | 阻挡命中        |
| Initial Overlap | 初始重叠        |
| Time            | 飞行时间（0~1） |
| Distance        | 距离            |
| Location        | 命中地点        |
| Impact Point    | 命中点          |
| Normal          | 法线            |
| Impact Normal   | 命中法线        |
| Phys Mat(       | 物理材质        |
| Hit Actor       | 命中对象        |
| Hit Component   | 命中组件        |
| Hit Bone Name   | 命中骨骼名称    |
| Bone Name       | 追踪骨骼名称    |
| Hit Item        | 命中基元        |
| Element Index   | 命中元素索引    |
| Face Index      | 命中面索引      |
| Trace Start     | 追踪开始        |
| Trace End       | 追踪结束        |




![[../../../../_Config/Attatchment/Pasted image 20220509183547.png]]

鼠标也可以射，使用  [[../Game/Player/Convert Mouse Location To World Space|将鼠标位置转换到世界空间]]

![[../../../../_Config/Attatchment/Pasted image 20220509193019.png]]

![[../../../../_Config/Attatchment/Pasted image 20220509193123.png]]




