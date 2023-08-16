<script lang="ts">
    import LogEntryTable from "./LogEntryTable.svelte";
    import GraphCard from "./GraphCard.svelte";
    import type { PageData } from "./$types";
    import ImageSlider from "./ImageSlider.svelte";

    
    export let data: PageData
    
</script>

<div class="container-fluid">
    <div class="grid">
        <GraphCard chartData={data.measurementResponse.measurements} />
        <ImageSlider webcamImages={data.webcamImages}/>
    </div>
    <div>
        <LogEntryTable measurements={data.measurementResponse.measurements} />
    </div>
</div>