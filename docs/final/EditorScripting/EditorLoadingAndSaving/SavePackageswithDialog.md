# SavePackageswithDialog

保存所有包。可选地提示用户选择哪些软件包要保存。提示用户选择哪些脏包要保存，并从源码控制中签出（如果启用）。

目标是编辑器加载和保存工具

## 图示

![]($-20221218-18495352.png)

## Inputs

在。执行。

要保存的包。包对象引用的数组。要保存的包的列表。地图和内容包都支持。

只有肮脏的。布尔型。

## Outputs

出：执行。

返回值。布尔值。成功时为真，失败时为假。
Save all packages. Optionally prompting the user to select which packages to save.. Prompt the user to select which dirty packages to save and check them out from source control (if enabled).

Target is Editor Loading and Saving Utils

## 图示

![]($-20221218-18495352.png)

## Inputs

In: Exec.

Packages to Save: Array of Package Object References. The list of packages to save. Both map and content packages are supported.

Only Dirty: Boolean.  

## Outputs

Out: Exec.

Return Value: Boolean. true on success, false on fail..

