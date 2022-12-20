# RequestShutdown

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

