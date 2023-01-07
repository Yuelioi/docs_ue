# RemoveAllCurvesOfType

删除所有指定类型的曲线。为每一条被移除的曲线广播一个 AnimDataModelNotifyType::CurveRemoved，包裹在 BracketOpened/BracketClosed 的通知中。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333121.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

支持的曲线类型。ERawCurveTrackTypes 枚举。要删除所有曲线的类型。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

<hr>

Removes all the curves of the provided type. Broadcasts a EAnimDataModelNotifyType::CurveRemoved for each removed curve, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333121.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Supported Curve Type: ERawCurveTrackTypes Enum. Type for which all curves are to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.
