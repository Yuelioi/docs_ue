# ExecuteTriggerParameter_Message

执行一个命名的触发器。不缓存触发器的值，所以只在声音已经在播放时执行。如果打算让触发器立即执行（如果正在播放），并在初始化时对所有未来的实例进行调用，则调用'SetBoolParameter'，并在初始化时使用预期的触发器行为（如果初始化时需要触发，则为真，如果不需要，则为假）。

目标是音频参数控制器接口

## 图示

![]($-20221218-18064180.png)

## Inputs

在。执行。

目标。对象参考。

在名称。名称。 

## Outputs

输出。执行：执行。

Executes a named trigger. Does not cache trigger value, so only executes if the sound. is already playing. If the intent is for the trigger to execute immediately (if playing). and be called on initialization for all future instances, call 'SetBoolParameter' with the. intended initial trigger behavior (true if trigger desired on initialization, false if not).

Target is Audio Parameter Controller Interface

## 图示

![]($-20221218-18064180.png)

## Inputs

In: Exec.

Target: Object Reference.

In Name: Name.  

## Outputs

Out: Exec.

