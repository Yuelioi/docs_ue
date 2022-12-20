# RenderMovie

Attempts to render a sequence to movie based on the specified settings. This will automatically detect. if we're rendering via a PIE instance or a new process based on the passed in settings. Will return false. if the state is not valid (ie: null or missing required parameters, capture in progress, etc.), true otherwise.

Target is Sequencer Tools Function Library

## 图示

![]($-20221218-18535153.png)

## Inputs

In: Exec.

In Capture Settings: Movie Scene Capture Object Reference.

On Finished Callback: Delegate.  

## Outputs

Out: Exec.

Return Value: Boolean. Attempts to render a sequence to movie based on the specified settings. This will automatically detect. if we're rendering via a PIE instance or a new process based on the passed in settings. Will return false. if the state is not valid (ie: null or missing required parameters, capture in progress, etc.), true otherwise..

