# BreakMoviePipelineOutputData

Adds a node that breaks a 'MoviePipelineOutputData' into its member fields

## 图示

![]($-20221218-14401858.png)

## Inputs

Movie Pipeline Output Data: Movie Pipeline Output Data Structure (by ref).  

## Outputs

Pipeline: Movie Pipeline Object Reference. Pipeline:. The UMoviePipeline instance that generated this data. This is only provided as an id (in the event you were the one who created. the UMoviePipeline instance. DO NOT CALL FUNCTIONS ON THIS (unless you know what you're doing): Provided here for backwards compatibility..

Job: Movie Pipeline Executor Job Object Reference. Job:. Job the data is for. Job may still be in progress (if a shot callback) so be careful about modifying properties on it.

Success: Boolean. Success:. Did the job succeed, or was it canceled early due to an error (such as failure to write file to disk)?.

Shot Data: Array of Movie Pipeline Shot Output Data Structures. Shot Data:. The file data for each shot that was rendered. If no files were written this will be empty. If this is from the per-shot work. finished callback it will only have one entry (for the just finished shot). Will not include shots that did not get rendered. due to the pipeline encountering an error..

