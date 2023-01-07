# OnMoviePipelineWorkFinishedDeleg-

On Movie Pipeline Work Finished Delegate:.当我们完全完成这个管道时被调用。这意味着所有的帧都已经渲染完毕，所有的文件都已经写入磁盘，任何最后的输出也已经完成。此管道将在调用。Shutdown()，以确保我们已经从所有委托中取消注册，并且不再试图做任何事情（即使我们仍然存在）。

返回中的 params 结构将有关于每次拍摄的文件写入磁盘的元数据。

<hr>

On Movie Pipeline Work Finished Delegate:. Called when we have completely finished this pipeline. This means that all frames have been rendered,. all files written to disk, and any post-finalize exports have finished. This Pipeline will call. Shutdown() on itself before calling this delegate to ensure we've unregistered from all delegates. and are no longer trying to do anything (even if we still exist).

The params struct in the return will have metadata about files written to disk for each shot.
