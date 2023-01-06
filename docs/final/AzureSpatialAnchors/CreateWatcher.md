# CreateWatcher

创建并启动一个 "观察者"，搜索定位标准中指定的蔚蓝云空间锚。使用AzureSpatialAnchorsEventComponent的事件来获取。 找到锚点和观察者完成的通知。

目标是Azure Spatial Anchors Library

## 图示

![]($-20221218-18101103.png)

## Inputs

在。执行。

在定位标准。Azure Spatial Anchors定位标准结构（通过引用）。描述我们希望启动的观察者的结构。 

## Outputs

出来。执行。

Out Watcher Identifier: 整数。创建的观察者的ID（可以用来停止观察者）。

输出结果。EAzureSpatialAnchorsResult Enum。结果枚举。

Out Error String: 字符串。关于OutResult的附加信息（通常为空）。

Create and start a 'Watcher' searching for azure cloud spatial anchors as specified in the locate criteria. Use an AzureSpatialAnchorsEventComponent's events to get. notifications of found anchors and watcher completion.

Target is Azure Spatial Anchors Library

## 图示

![]($-20221218-18101103.png)

## Inputs

In: Exec.

In Locate Criteria: Azure Spatial Anchors Locate Criteria Structure (by ref). Structure describing the watcher we wish to start..  

## Outputs

Out: Exec.

Out Watcher Identifier: Integer. The ID of the created watcher (can be used to stop the watcher)..

Out Result: EAzureSpatialAnchorsResult Enum. The Result enumeration..

Out Error String: String. Additional information about the OutResult (often empty)..

