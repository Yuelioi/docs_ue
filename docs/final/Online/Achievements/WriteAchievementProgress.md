# WriteAchievementProgress

将某项成就的进展写入默认的在线子系统中。AchievementName是要更新进度的成就的ID。进度是完成成就的报告进度。UserTag不在内部使用，但它会在成功或失败时返回。

目标是成就写回调代理

## 图示

![]($-20221218-20161282.png)

## Inputs

在。执行。

播放器控制器。播放器控制器对象参考。

成就名称。名称：

进度。Float（单精度）。

用户标签：整数。  

## Outputs

出：执行。

关于成功。执政。On Success:.当有一个成功的成就写入时被调用。

失败时。执行。失败时：。当有一个不成功的成就写入时被调用。

书面成就名称。姓名

书面进度。Float（单精度）。

书面用户标签：整数。

Writes progress about an achievement to the default online subsystem. AchievementName is the ID of the achievement to update progress on. Progress is the reported progress toward accomplishing the achievement. UserTag is not used internally, but it is returned on success or failure

Target is Achievement Write Callback Proxy

## 图示

![]($-20221218-20161282.png)

## Inputs

In: Exec.

Player Controller: Player Controller Object Reference.

Achievement Name: Name.

Progress: Float (single-precision).

User Tag: Integer.  

## Outputs

Out: Exec.

On Success: Exec. On Success:. Called when there is a successful achievement write.

On Failure: Exec. On Failure:. Called when there is an unsuccessful achievement write.

Written Achievement Name: Name.

Written Progress: Float (single-precision).

Written User Tag: Integer.

