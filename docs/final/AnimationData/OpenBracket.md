# OpenBracket

打开一个交互括号，用于组合一组控制器的动作。广播一个 AnimDataModelNotifyType::BracketOpened 通知，这可以被任何视图或依赖系统使用，以停止任何不必要的或无效的操作，直到（最后）括号被关闭。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-17532403.png)

## Inputs

在。执行。

目标。动画数据控制器界面。

标题中。文本（按参考）。对括号的描述，例如 "生成曲线数据"。

应该交易。布尔值。是否应该生成任何撤销-重做的修改。

## Outputs

输出。执行：执行。

<hr>

Opens an interaction bracket, used for combining a set of controller actions. Broadcasts a EAnimDataModelNotifyType::BracketOpened notify,. this can be used by any Views or dependendent systems to halt any unnecessary or invalid operations until the (last) bracket is closed.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-17532403.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

In Title: Text (by ref). Description of the bracket, e.g. "Generating Curve Data".

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.
