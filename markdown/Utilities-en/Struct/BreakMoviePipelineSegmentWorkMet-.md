# BreakMoviePipelineSegmentWorkMet-

Adds a node that breaks a 'MoviePipelineSegmentWorkMetrics' into its member fields

## 图示

![]($-20221218-14402204.png)

## Inputs

Movie Pipeline Segment Work Metrics: Movie Pipeline Segment Work Metrics Structure (by ref).  

## Outputs

Segment Name: String. Segment Name:. The name of the segment (if any).

Output Frame Index: Integer. Output Frame Index:. Index of the output frame we are working on right now..

Total Output Frame Count: Integer. Total Output Frame Count:. The number of output frames we expect to make for this segment..

Output Sub Sample Index: Integer. Output Sub Sample Index:. Which temporal/spatial sub sample are we working on right now. This counts temporal, spatial, and tile samples to accurately reflect how much work is needed for this output frame..

Total Sub Sample Count: Integer. Total Sub Sample Count:. The total number of samples we will have to build to render this output frame..

Engine Warm Up Frame Index: Integer. Engine Warm Up Frame Index:. The index of the engine warm up frame that we are working on. No rendering samples are produced for these..

Total Engine Warm Up Frame Count: Integer. Total Engine Warm Up Frame Count:. The total number of engine warm up frames for this segment..

