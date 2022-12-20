# HealthSnapshot

On this page 

  * Actions





## Actions

Log Performance Snapshot. Writes a snapshot to the log. Captures memory stats by default. Also captures performance stats if called after StartHealthSnapshotChart and before SopHealthSnapshotChart.: Target is Health Snapshot Blueprint Library.

Start Performance Snapshots. Begins capturing FPS charts that can be used to include performance data in a HealthSnapshot. If snapshots are already running clears all accumulated performance data: Target is Health Snapshot Blueprint Library.

Stop Performance Snapshots. Stops capturing FPS charts only if StartHealthSnapshotChart has first been called. Does nothing if FPS charts are not running. HealthSnapshots captured after this is called will not include performance stats.: Target is Health Snapshot Blueprint Library.

