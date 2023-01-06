# RequestShutdown

要求电影管道在下一个可用的时间内关闭。该流水线将尝试放弃当前帧（例如，如果有更多的时间样本等待处理），但如果有空间样本已经提交给GPU，则可能被迫结束。关闭流程将被运行以确保已经完成的工作被写入磁盘。这是一个非阻塞操作，如果你需要的话，请使用Shutdown()来代替。

目标是电影管道

## 图示

![]($-20221218-20095070.png)

## Inputs

在。执行。

目标。电影管道对象参考。

是错误。布尔值。  

## Outputs

出：执行。

Request the movie pipeline to shut down at the next available time. The pipeline will attempt to abandon. the current frame (such as if there are more temporal samples pending) but may be forced into finishing if. there are spatial samples already submitted to the GPU. The shutdown flow will be run to ensure already. completed work is written to disk. This is a non-blocking operation, use Shutdown() instead if you need to. block until it is fully shut down.

Target is Movie Pipeline

## 图示

![]($-20221218-20095070.png)

## Inputs

In: Exec.

Target: Movie Pipeline Object Reference.

Is Error: Boolean.  

## Outputs

Out: Exec.

