# ExecuteDataprep

Runs the Dataprep asset's producers, execute its recipe and finally runs the consumer to output the results.

Target is Dataprep Core Blueprint Library

## 图示

![]($-20221218-18491607.png)

## Inputs

In: Exec.

Dataprep Asset Interface: Dataprep Asset Interface Object Reference. Dataprep asset to run..

Log Reporting Method: EDataprepReportMethod Enum. Chose the way the log from the producers, operations and consumer will be reported (this will only affect the log from dataprep)..

Progress Reporting Method: EDataprepReportMethod Enum. The way that the progress updates will be reported..  

## Outputs

Out: Exec.

Return Value: Boolean. True if successful..

