# MakeLevelExporterUSDOptionsInner

Adds a node that create a 'LevelExporterUSDOptionsInner' from its members

## 图示

![]($-20221218-14563566.png)

## Inputs

Selection Only: Boolean. Selection Only:. Whether to export only the selected actors, and assets used by them.

Export Actor Folders: Boolean. Export Actor Folders:. Whether to use UE actor folders as empty prims.

Ignore Sequencer Animations: Boolean. Ignore Sequencer Animations:. If true, and if we have a level sequence animating the level during export, it will revert any actor or component to its unanimated state before writing to USD.

Export Foliage On Actors Layer: Boolean. Export Foliage on Actors Layer:. By default foliage instances will be exported to the same layer as the component they were placed on in the editor.. Enable this to instead export the foliage instances to the same layer as the foliage actor they belong to.. This is useful if those foliage instances were placed with the "Place In Current Level" option..

Asset Folder: Directory Path Structure. Asset Folder:. Where to place all the generated asset files.

Asset Options: Usd Mesh Asset Options Structure. Asset Options:. Options to use for all exported assets when appropriate (e.g. static and skeletal meshes, materials, etc.).

Lowest Landscape LOD: Integer. Lowest Landscape LOD:. Lowest of the LOD indices to export landscapes with (use 0 for full resolution).

Highest Landscape LOD: Integer. Highest Landscape LOD:. Highest of the LOD indices to export landscapes with. Each value above 0 halves resolution.. The max value depends on the number of components and sections per component of each landscape, and may be clamped..

Landscape Bake Resolution: Int Point Structure. Landscape Bake Resolution:. Resolution to use when baking landscape materials into textures.

Export Sublayers: Boolean. Export Sublayers:. If true, will export sub-levels as separate layers (referenced as sublayers). If false, will collapse all sub-levels in a single exported root layer.

Levels To Ignore: Set of Strings. Levels to Ignore:. Names of levels that should be ignored when collecting actors to export (e.g. "Persistent Level", "Level1", "MySubLevel", etc.).  

## Outputs

Level Exporter USDOptions Inner: Level Exporter USDOptions Inner Structure.

