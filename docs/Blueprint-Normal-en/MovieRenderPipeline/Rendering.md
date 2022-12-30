# Rendering

On this page 

  * Actions





## Actions

Is Rendering. Returns true if there is an active executor working on producing a movie. This could be actively rendering frames,. or working on post processing (finalizing file writes, etc.). Use GetActiveExecutor() and query it directly for. more information, progress updates, etc.: Target is Movie Pipeline Queue Engine Subsystem.

Render Queue with Executor. Starts processing the current queue with the supplied executor class. This starts an async process which. may or may not run in a separate process (or on separate machines), determined by the executor implementation.. The executor should report progress for jobs depending on the implementation.: Target is Movie Pipeline Queue Engine Subsystem.

Render Queue with Executor Instance. Starts processing the current queue with the supplied executor. This starts an async process which. may or may not run in a separate process (or on separate machines), determined by the executor implementation.. The executor should report progress for jobs depending on the implementation.: Target is Movie Pipeline Queue Engine Subsystem.

