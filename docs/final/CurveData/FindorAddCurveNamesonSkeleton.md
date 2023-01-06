# FindorAddCurveNamesonSkeleton

用所提供的骨架更新曲线名称，如果没有找到显示名称，就会添加它，从而修改骨架。为每个UID不同的曲线名称或作为新的智能名称添加的曲线名称广播一个AnimDataModelNotifyType::CurveRenamed，并将其包裹在BracketOpened/BracketClosed通知中。

目标是动画数据控制器

## 图示

![]($-20221218-18332892.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

骨架。骨架对象参考。用于检索显示名称值的骨架。

支持的曲线类型。ERawCurveTrackTypes枚举。应该更新名称的曲线类型。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

Updates the curve names with the provided skeleton, if a display name is not found it will be added thus modifying the skeleton. Broadcasts a EAnimDataModelNotifyType::CurveRenamed for each curve name for which the UID was different or if it was added as a new smartname, wrapped within BracketOpened/BracketClosed notifies.

Target is Animation Data Controller

## 图示

![]($-20221218-18332892.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Skeleton: Skeleton Object Reference. Skeleton to retrieve the display name values from.

Supported Curve Type: ERawCurveTrackTypes Enum. Curve type for which the names should be updated.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.  

## Outputs

Out: Exec.

