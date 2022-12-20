# BreakMovieSceneCaptureSettings

Adds a node that breaks a 'MovieSceneCaptureSettings' into its member fields

## 图示

![]($-20221218-14402470.png)

## Inputs

Movie Scene Capture Settings: Movie Scene Capture Settings Structure (by ref).  

## Outputs

Output Directory: Directory Path Structure. Output Directory:. The directory to output the captured file(s) in.

Game Mode Override: Game Mode Base Class Reference. Game Mode Override:. Optional game mode to override the map's default game mode with. This can be useful if the game's normal mode displays UI elements or loading screens that you don't want captured..

Filename Format: String. Output Format:. The format to use for the resulting filename. Extension will be added automatically. Any tokens of the form {token} will be replaced with the corresponding value:. {fps} - The captured framerate. {frame} - The current frame number (only relevant for image sequences). {width} - The width of the captured frames. {height} - The height of the captured frames. {world} - The name of the current world. {quality} - The image compression quality setting. {material} - The material/render pass. {shot} - The name of the level sequence asset shot being played. {sequence} - The name of the level sequence asset (ie. master) being played. {camera} - The name of the current camera. {date} - The date in the format of {year}.{month}.{day}. {year} - The current year. {month} - The current month. {day} - The current day. {time} - The current time in the format of hours.minutes.seconds.

Overwrite Existing: Boolean. Overwrite Existing:. Whether to overwrite existing files or not.

Use Relative Frame Numbers: Boolean. Use Relative Frame Numbers:. True if frame numbers in the output files should be relative to zero, rather than the actual frame numbers in the originating animation content..

Handle Frames: Integer. Handle Frames:. Number of frame handles to include for each shot.

Movie Extension: String. Movie Extension:. Filename extension for movies referenced in the XMLs/EDLs.

Zero Pad Frame Numbers: Byte. Zero Pad Frame Numbers:. How much to zero-pad frame numbers on filenames.

Frame Rate: Frame Rate Structure. Frame Rate:. The sequence's frame rate at which to capture if "Use Custom Frame Rate" is not enabled.

Use Custom Frame Rate: Boolean. Use Custom Frame Rate:. Specify using the custom frame rate as opposed to the sequence's display rate.

Custom Frame Rate: Frame Rate Structure. Custom Frame Rate:. The custom frame rate at which to capture if "Use Custom Frame Rate" is enabled.

Resolution: Capture Resolution Structure. Resolution:. The resolution at which to capture.

Enable Texture Streaming: Boolean. Enable Texture Streaming:. Whether to texture streaming should be enabled while capturing. Turning off texture streaming may cause much more memory to be used, but also reduces the chance of blurry textures in your captured video..

Cinematic Engine Scalability: Boolean. Cinematic Engine Scalability:. Whether to enable cinematic engine scalability settings.

Cinematic Mode: Boolean. Cinematic Mode:. Whether to enable cinematic mode whilst capturing.

Allow Movement: Boolean. Allow Movement:. Whether to allow player movement whilst capturing.

Allow Turning: Boolean. Allow Turning:. Whether to allow player rotation whilst capturing.

Show Player: Boolean. Show Player:. Whether to show the local player whilst capturing.

Show HUD: Boolean. Show HUD:. Whether to show the in-game HUD whilst capturing.

Use Path Tracer: Boolean. Use Path Tracer:. Whether to use the path tracer (if supported) to render the scene.

Path Tracer Sample Per Pixel: Integer. Path Tracer Sample Per Pixel:. Number of sampler per pixel to be used when rendering the scene with the path tracer (if supported).

