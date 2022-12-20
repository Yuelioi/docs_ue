# MakeMoviePipelineFilenameResolve-

Adds a node that create a 'MoviePipelineFilenameResolveParams' from its members

## 图示

![]($-20221218-14580130.png)

## Inputs

Frame Number: Integer. Frame Number:. Frame Number for the Master (matching what you see in the Sequencer timeline. ie: If the Sequence PlaybackRange starts on 50, this value would be 50 on the first frame..

Frame Number Shot: Integer. Frame Number Shot:. Frame Number for the Shot (matching what you would see in Sequencer at the sub-sequence level..

Frame Number Rel: Integer. Frame Number Rel:. Frame Number for the Master (relative to 0, not what you would see in the Sequencer timeline. ie: If sequence PlaybackRange starts on 50, this value would be 0 on the first frame..

Frame Number Shot Rel: Integer. Frame Number Shot Rel:. Frame Number for the Shot (relative to 0, not what you would see in the Sequencer timeline..

Camera Name Override: String. Camera Name Override:. Name used by the {camera_name} format tag. If specified, this will override the camera name (which is normally pulled from the ShotOverride object)..

Shot Name Override: String. Shot Name Override:. Name used by the {shot_name} format tag. If specified, this will override the shot name (which is normally pulled from the ShotOverride object).

Zero Pad Frame Number Count: Integer. Zero Pad Frame Number Count:. When converitng frame numbers to strings, how many digits should we pad them up to? ie: 5 => 0005 with a count of 4..

Force Relative Frame Numbers: Boolean. Force Relative Frame Numbers:. If true, force format strings (like {frame_number}) to resolve using the relative version. Used when slow-mo is detected as frame numbers would overlap..

File Name Format Overrides: Map of Strings to Strings. File Name Format Overrides:. A map between "{format}" tokens and their values. These are applied after the auto-generated ones from the system,. which allows the caller to override things like {.ext} depending or {render_pass} which have dummy names by default..

File Metadata: Map of Strings to Strings. File Metadata:. A key/value pair that maps metadata names to their values. Output is only supported in exr formats at the moment..

Initialization Time: Date Time Structure. Initialization Time:. The initialization time for this job. Used to resolve time-based format arguments..

Initialization Version: Integer. Initialization Version:. The version for this job. Used to resolve version format arguments..

Job: Movie Pipeline Executor Job Object Reference. Job:: This is the job all of the settings should be pulled from..

Shot Override: Movie Pipeline Executor Shot Object Reference. Shot Override:: If specified, settings will be pulled from this shot (if overriden by the shot). If null, always use the master configuration in the job..

Additional Frame Number Offset: Integer. Additional Frame Number Offset:. Additional offset added onto the offset provided by the Output Settings in the Job. Required for some internal things (FCPXML)..  

## Outputs

Movie Pipeline Filename Resolve Params: Movie Pipeline Filename Resolve Params Structure.

