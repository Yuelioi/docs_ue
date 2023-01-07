# SaveDirtyPackages

查看所有当前加载的软件包，如果它们的 "bDirty "标志被设置，则将其保存。假设所有的脏包都应该被保存并从源代码控制中签出（如果启用）。

目标是编辑器加载和保存工具

## 图示

![](/uploads/projects/ue-bluprint/20221218-18494818.png)

## Inputs

在。执行。

保存地图包。布尔值。如果应该保存地图包，则为真。

保存内容包。布尔值。如果我们应该保存内容包，则为真。

## Outputs

出：执行。

返回值。布尔值。成功时为真，失败时为假。

<hr>

Looks at all currently loaded packages and saves them if their "bDirty" flag is set.. Assume all dirty packages should be saved and check out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![](/uploads/projects/ue-bluprint/20221218-18494818.png)

## Inputs

In: Exec.

Save Map Packages: Boolean. true if map packages should be saved.

Save Content Packages: Boolean. true if we should save content packages..

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..
