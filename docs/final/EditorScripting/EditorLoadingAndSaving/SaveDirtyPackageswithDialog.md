# SaveDirtyPackageswithDialog

查看所有当前加载的软件包，如果它们的 "bDirty "标志被设置，则保存它们。提示用户选择保存哪些脏包，并从源代码控制中检查它们（如果启用）。

目标是编辑器加载和保存工具

## 图示

![]($-20221218-18494947.png)

## Inputs

在。执行。

保存地图包。布尔值。如果应该保存地图包，则为真。

保存内容包。布尔值。如果我们应该保存内容包，则为真。

## Outputs

出：执行。

返回值。布尔值。成功时为真，失败时为假。
Looks at all currently loaded packages and saves them if their "bDirty" flag is set.. Prompt the user to select which dirty packages to save and check them out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18494947.png)

## Inputs

In: Exec.

Save Map Packages: Boolean. true if map packages should be saved.

Save Content Packages: Boolean. true if we should save content packages..  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..

