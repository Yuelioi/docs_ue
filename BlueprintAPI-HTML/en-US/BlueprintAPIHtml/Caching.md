# Caching

On this page 

  * Actions





## Actions

Reset All Component Transforms. Resets all components back to the world space transform they had when the cache for them was originally recorded. if one is available: Target is Chaos Cache Manager.

Reset Single Transform. Resets the component at the specified index in the observed list back to the world space transform it had when the. cache for it was originally recorded if one is available: Target is Chaos Cache Manager.

Trigger All. Triggers the recording or playback of all observed components: Target is Chaos Cache Manager.

Trigger Component. Triggers a component to play or record.. If the cache manager has an observed component entry for InComponent and it is a triggered entry. this will begin the playback or record for that component, otherwise no action is taken.: Target is Chaos Cache Manager.

Trigger Component by Cache. Triggers a component to play or record.. Searches the observed component list for an entry matching InCacheName and triggers the. playback or recording of the linked observed component: Target is Chaos Cache Manager.

