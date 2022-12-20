# OnExecutorErroredDelegate

On Executor Errored Delegate:. Called when an individual job reports a warning/error. Jobs are considered fatal. if the severity was bad enough to abort the job (missing sequence, write failure, etc.)

Exposed for Blueprints/Python. Called at the same time as the native one.

