# FindTracksbyExactType

Find all tracks within a given binding of the specified type, not allowing sub-classed types

Target is Movie Scene Binding Extensions

## 图示

![]($-20221218-20540887.png)

## Inputs

In: Exec.

In Binding: Sequencer Binding Proxy Structure (by ref). The binding to find tracks in.

Track Type: Movie Scene Track Class Reference. A UMovieSceneTrack class type specifying the exact types of track to return.  

## Outputs

Out: Exec.

Return Value: Array of Movie Scene Track Object References. An array containing any tracks that are exactly the same as the type specified.

