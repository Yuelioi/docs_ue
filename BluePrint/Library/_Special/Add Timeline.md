https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Timelines/
https://www.youtube.com/watch?v=v7bdcvGlgIg&ab_channel=MathewWadstein

## 说明

在小部件蓝图中不起作用（只在 Actor 类中起作用）

时间轴节点是蓝图中的特殊节点，可提供基于时间的动画，以便根据事件、浮点数、向量或时间轴上的关键帧处触发。

双击图表选项卡或蓝图选项卡中的时间线，可以编辑时间线。

可用于例如开门、改变灯光或对场景中的 Actor 执行其他以时间为中心的操作。

![[../../../../_Config/Attatchment/Pasted image 20220420002626.png]]

## 本质

每次 Update，都会更新 Track 值输出

## 参数

| Input            | 输入         | 说明                                           |
| ---------------- | ------------ | ---------------------------------------------- |
| Play             | 播放         | 使时间轴从其当前时间向后播放。                 |
| Play from Start  | 从头开始播放 | 使时间轴从头开始向后播放。                     |
| Stop             | 停止         | 在当前时间冻结时间轴的播放。                   |
| Reverse          | 反转         | 从当前时间向前播放时间轴。                     |
| Reverse from End | 从结尾反转   | 从结尾开始向前播放时间轴。                     |
| Set New Time     | 设置新时间   | 将当前时间设置为新时间                         |
| New Time         | 新时间       | 浮点值。使用 Set New Time 将时间线跳转到该值。 |

| Output    | 输出 | 说明                                             |
| --------- | ---- | ------------------------------------------------ |
| Update    | 更新 | 调用时间线后立即输出值。                         |
| Finished  | 完成 | 播放结束时输出执行信号。不是停止功能触发的。     |
| Direction | 方向 | 时间轴播放方向的，枚举数据（forward/backward）。 |

## 时间线图表

![[../../../../_Config/Attatchment/Pasted image 20220420013348.png]]

图表类型：浮点、向量、事件、颜色

参数设置

- 持续时间：设置时间轴持续时间
- 使用最后一个关键帧：不懂
- 自动播放
- 循环
- Replicated：复制
- Ignore Time Dilation：忽略时间膨胀

## 示例

### 开关门

![[../../../../_Config/Attatchment/Pasted image 20220420004136.png]]

门有触发器。触发时，将 门板从 0 度旋转 90 度。结束时，从 90 度返回 0 度。

![[../../../../_Config/Attatchment/Pasted image 20220420004041.png]]

### 电梯升降

按 1 电梯上升，按 2 电梯下降

![[../../../../_Config/Attatchment/Pasted image 20220420010839.png]]
