# UpdateModulator

将调制器（如总线、总线混合、发生器）的UObject定义的更新提交给音频线程中的活动实例（如果调制器类型未被激活则忽略）。

目标是音频调制器静态

## 图示

![]($-20221218-18081436.png)

## Inputs

在。执行。

调制器。声音调制器基本对象参考。要更新的调制器。 

## Outputs

输出。Exec.

Commits updates from a UObject definition of a modulator (e.g. Bus, Bus Mix, Generator). to active instance in audio thread (ignored if modulator type has not been activated).

Target is Audio Modulation Statics

## 图示

![]($-20221218-18081436.png)

## Inputs

In: Exec.

Modulator: Sound Modulator Base Object Reference. Modulator to update.  

## Outputs

Out: Exec.

