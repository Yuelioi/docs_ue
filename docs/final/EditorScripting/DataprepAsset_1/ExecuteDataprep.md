# ExecuteDataprep

运行 Dataprep 资产的生产者，执行其配方，最后运行消费者来输出结果。

目标是 Dataprep 核心蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18491607.png)

## Inputs

在。执行。

Dataprep 资产接口。Dataprep 资产接口对象参考。数据处理资产的运行...

日志报告方法。EDataprepReportMethod 枚举。选择来自生产者、操作者和消费者的日志报告方式（这只影响来自 dataprep 的日志）。

进度报告方法。EDataprepReportMethod Enum.进度更新的报告方式。

## Outputs

出：执行。

返回值。布尔值。如果成功则为真。

<hr>

Runs the Dataprep asset's producers, execute its recipe and finally runs the consumer to output the results.

Target is Dataprep Core Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18491607.png)

## Inputs

In: Exec.

Dataprep Asset Interface: Dataprep Asset Interface Object Reference. Dataprep asset to run..

Log Reporting Method: EDataprepReportMethod Enum. Chose the way the log from the producers, operations and consumer will be reported (this will only affect the log from dataprep)..

Progress Reporting Method: EDataprepReportMethod Enum. The way that the progress updates will be reported..

## Outputs

Out: Exec.

Return Value: Boolean. True if successful..
