<script lang="ts">
    import LogEntryTable from "./LogEntryTable.svelte";
    import type { PageData } from "./$types";
    
    export let data: PageData
    
</script>

<div class="container-fluid">
    <div class="grid">
        <!-- <GraphCard />
        <ImageSlider imageIds={$loaded_sensor_data.map(x => x.webcamImageId)}/>	 -->
    </div>
    <div>
        <LogEntryTable measurements={data.measurements} />
    </div>
</div>