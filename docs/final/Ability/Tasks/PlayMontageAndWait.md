# PlayMontageAndWait

开始在头像演员上播放一个动画蒙太奇，并等待它完成。如果StopWhenAbilityEnds为真，如果能力正常结束，这个蒙太奇将被中止。当能力被明确地取消时，它总是被停止。在正常执行时，当蒙太奇正在混合时，OnBlendOut被调用，而当它完全播放完毕时，OnCompleted被调用。如果另一个蒙太奇覆盖了它，OnInterrupted会被调用，如果能力或任务被取消了，OnCancelled会被调用。

目标是能力 任务 播放蒙太奇并等待

## 图示

![]($-20221218-17331219.png)

## Inputs

在。执行。

任务实例名称。名称。设置为覆盖该任务的名称，以便以后查询。

要播放的蒙太奇。动画蒙太奇对象参考。要在角色上播放的蒙太奇。

速率。Float（单精度）。改为更快或更慢地播放蒙太奇。

开始部分。名称。如果不是空的，命名的蒙太奇部分开始。

Stop when Ability Ends：布尔值。如果为真，如果能力正常结束，这个蒙太奇将被中止。当能力被明确取消时，它总是被停止。

Anim Root Motion Translation Scale（动画根部运动转换比例）。Float（单精度）。改变以修改根部运动的大小，或者设置为0以完全阻止它。

开始时间秒数。浮点（单精度）。蒙太奇中的起始时间偏移，如果StartSection也被设置的话，它将被StartSection所覆盖。 

## Outputs

输出。执行：执行。

非同步任务。Ability Task Play Montage And Wait Object Reference。

在完成时。执行。完成时：执行。

融合时。执行。On Blend Out.

在中断中。执行。On 中断。

在取消时。执行。在取消时。

Start playing an animation montage on the avatar actor and wait for it to finish. If StopWhenAbilityEnds is true, this montage will be aborted if the ability ends normally. It is always stopped when the ability is explicitly cancelled.. On normal execution, OnBlendOut is called when the montage is blending out, and OnCompleted when it is completely done playing. OnInterrupted is called if another montage overwrites this, and OnCancelled is called if the ability or task is cancelled

Target is Ability Task Play Montage and Wait

## 图示

![]($-20221218-17331219.png)

## Inputs

In: Exec.

Task Instance Name: Name. Set to override the name of this task, for later querying.

Montage to Play: Anim Montage Object Reference. The montage to play on the character.

Rate: Float (single-precision). Change to play the montage faster or slower.

Start Section: Name. If not empty, named montage section to start from.

Stop when Ability Ends: Boolean. If true, this montage will be aborted if the ability ends normally. It is always stopped when the ability is explicitly cancelled.

Anim Root Motion Translation Scale: Float (single-precision). Change to modify size of root motion or set to 0 to block it entirely.

Start Time Seconds: Float (single-precision). Starting time offset in montage, this will be overridden by StartSection if that is also set.  

## Outputs

Out: Exec.

Async Task: Ability Task Play Montage And Wait Object Reference.

On Completed: Exec. On Completed.

On Blend Out: Exec. On Blend Out.

On Interrupted: Exec. On Interrupted.

On Cancelled: Exec. On Cancelled.

