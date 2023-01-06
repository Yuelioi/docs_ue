# StartRecording

使用指定的参数开始一个新的录音。如果当前正在进行录音，则会失败

目标是采取记录器蓝图库

## 图示

![]($-20221218-21105490.png)

## Inputs

在。执行。

水平序列。水平序列对象参考。用于录制的基本水平序列。将在录制过程中回放并复制，以创建结果资产的起始点。

来源。采取录音机来源对象参考。录音要使用的来源。

元数据。采取元数据对象参考。与此录音有关的元数据，复制到所产生的录音序列中。

参数。采取记录器参数结构（通过引用）。这个记录器实例的可配置参数。  

## Outputs

出：执行。

返回值。采取记录器对象参考。负责记录的记录器，如果无法启动记录，则为None。

Start a new recording using the specified parameters. Will fail if a recording is currently in progress

Target is Take Recorder Blueprint Library

## 图示

![]($-20221218-21105490.png)

## Inputs

In: Exec.

Level Sequence: Level Sequence Object Reference. The base level sequence to use for the recording. Will be played back during the recording and duplicated to create the starting point for the resulting asset..

Sources: Take Recorder Sources Object Reference. The sources to use for the recording.

Meta Data: Take Meta Data Object Reference. Meta-data pertaining to this recording, duplicated into the resulting recorded sequence.

Parameters: Take Recorder Parameters Structure (by ref). Configurable parameters for this recorder instance.  

## Outputs

Out: Exec.

Return Value: Take Recorder Object Reference. The recorder responsible for the recording, or None if a a recording could not be started.

