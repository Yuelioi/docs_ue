# HealthSnapshot

在这一页

  * 行动





## Actions

日志性能快照。将快照写到日志中。默认情况下捕获内存统计信息。如果在StartHealthSnapshotChart之后和SopHealthSnapshotChart之前调用，也会捕获性能统计信息。目标是健康快照蓝图库。

启动性能快照。开始捕捉FPS图表，可用于在HealthSnapshot中包含性能数据。如果快照已经在运行，则清除所有累积的性能数据。目标是健康快照蓝图库。

停止性能快照。只有当StartHealthSnapshotChart首先被调用时，才会停止捕获FPS图表。如果FPS图表没有运行，则没有任何作用。调用此功能后捕获的健康快照将不包括性能统计。目标是健康快照蓝图库。

On this page 

  * Actions





## Actions

Log Performance Snapshot. Writes a snapshot to the log. Captures memory stats by default. Also captures performance stats if called after StartHealthSnapshotChart and before SopHealthSnapshotChart.: Target is Health Snapshot Blueprint Library.

Start Performance Snapshots. Begins capturing FPS charts that can be used to include performance data in a HealthSnapshot. If snapshots are already running clears all accumulated performance data: Target is Health Snapshot Blueprint Library.

Stop Performance Snapshots. Stops capturing FPS charts only if StartHealthSnapshotChart has first been called. Does nothing if FPS charts are not running. HealthSnapshots captured after this is called will not include performance stats.: Target is Health Snapshot Blueprint Library.

