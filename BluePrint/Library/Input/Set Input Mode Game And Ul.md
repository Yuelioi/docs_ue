## 说明

设置一个只允许 UI 响应用户输入的输入模式，如果 UI 不对其进行处理，玩家输入/玩家控制器则有机会进行操作。

注意：这意味着控件中绑定的任何输入事件都将被调用。

目标是控件蓝图库


## 参数

![[../../../../_Config/Attatchment/Pasted image 20220422060725.png]]



### 输入

Play Control : Player Controller 玩家控制器对象。 

In Widget to Focus：控件对象引用，在哪个控件里生效

In Mouse Lock Mode：EMouseLockMode 枚举值

疑问：是锁定到所有屏幕 还是 UI 范围的屏幕

- 不锁定：啥都不管
- 锁定到 Capture：捕获后（点一下屏幕），不能越界（不允许越出游戏界面，也就是 LOL 全屏模式）
- 总是锁定：不能越界（不允许越出游戏界面）
- 锁定到全屏幕

Hide Cursor During Capture：隐藏光标

## 示例

[[../../UMG/控件/小案例/暂停游戏]]

[[../../UMG/控件/小案例/开始游戏界面]]


## 相关节点

[[Set Input Mode Game Only]]

[[Set Input Mode UI Only]]