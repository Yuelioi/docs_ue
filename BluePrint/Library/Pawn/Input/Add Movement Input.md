https://youtu.be/xkY8xqwmyFU?list=PLSlkDq2rO1t6iqA1vlUYirOCCN_2ZioB0


沿给定场景方向向量（通常是标准化的）添加运动输入，由“ScaleValue"缩放。如 ScaleValue. 小于 0 为负，则反向运动。

基础 Pawn 类不会自动应用运动，其取决于用户在 Tick 事件中执行此操作。Character 和 DefaultPawn 之类的子类将自动处理此输入和移动。

![[../../../../../_Config/Attatchment/Pasted image 20220429040018.png]]

Force：无视 [[Is Move Input Ignored]]

项目设置-输入-操作映射

图为按 S 后退 1 个单位

![[../../../../../_Config/Attatchment/Pasted image 20220429040139.png]]


## 自带角色蓝图
获取摄像机的旋转，然后旋转世界向前向量


![[../../../../../_Config/Attatchment/Pasted image 20220429040546.png]]





