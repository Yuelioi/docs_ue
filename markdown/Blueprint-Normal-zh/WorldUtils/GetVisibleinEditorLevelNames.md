# GetVisibleinEditorLevelNames

返回关卡的路径名称（例如"/Game/Maps/MyLevel"），这些关卡在 "世界 "的编辑器中是可见的，我们用这些关卡将 "世界 "恢复到其初始状态，然后将关卡强行导入导出。

目标是Usd转换蓝图库

## 图示

![]($-20221218-21383747.png)

## Inputs

在。执行。

世界。世界对象参考。  

## Outputs

出：执行。

返回值。字符串数组。返回关卡的路径名称（例如"/Game/Maps/MyLevel"），这些关卡在 "世界 "的编辑器中是可见的。 在我们强制流转关卡进行输出后，我们使用这些关卡将 "世界 "恢复到其初始状态。
