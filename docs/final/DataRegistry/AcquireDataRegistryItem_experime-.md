# AcquireDataRegistryItem_experime-

启动一个可能尚未被缓存的数据注册表项目的异步获取。

目标是数据注册子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18361846.png)

## Inputs

在。执行。

项目标识。数据注册表 Id 结构。要在缓存中查找的项目标识。

Acquire Callback。代表。获取成功或失败后将被调用的代理。

## Outputs

输出。执行：执行。

返回值。布尔值。如果请求被启动，返回 true；如果发生不可恢复的错误，返回 false。

<hr>

Starts an asynchronous acquire of a data registry item that may not yet be cached.

Target is Data Registry Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18361846.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Acquire Callback: Delegate. Delegate that will be called after acquire succeeds or failed.

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if request was started, false on unrecoverable error.
