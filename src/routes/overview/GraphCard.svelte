<script lang="ts">
    import Graph from '$lib/components/Graph.svelte';
    import type { MeasurementData } from '$lib/interface/Measurement';
    import { Timeresolution } from '$lib/interface/TimeResolution';
    import { active_time_resolution } from '../store';

    export let chartData: MeasurementData
</script>

<article>
    <header>Graph</header>
    <body>
        {#key $active_time_resolution}
            <Graph chartData={chartData}/>
        {/key}
    </body>
    <footer>
        <div class="grid">
            <button on:click={() => $active_time_resolution = Timeresolution.Minutes}>
                Livegraph
            </button>
            <button on:click={() => $active_time_resolution = Timeresolution.Hours}>
                Last 24 Hours
            </button>
        </div>
    </footer>
</article>