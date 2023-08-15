<script lang="ts">
    import { MeasurementType, type Measurement, type MeasurementData } from "$lib/interface/Measurement"

    export let measurements: MeasurementData
</script>

<article>
    <header>LogEntries</header>
    <figure>
        <table role="grid">
            <thead>
                <tr>
                    <th> Date </th>
                    <th> Humidity </th>
                    <th> Temperature </th>
                    <th> Co2 </th>
                    <th> Waterlevel </th>
                </tr>
            </thead>
            <tbody>
                    {#each Object.entries(measurements) as [key, val]}
                        <tr>
                            <td>
                                {key}
                            </td>
                            <td>
                                {val.find(x => x.measurementType == MeasurementType.HUMIDITY)?.value ?? "null"} %
                            </td>
                            <td>
                                {val.find(x => x.measurementType == MeasurementType.TEMPERATURE)?.value ?? "null"} °C
                            </td>
                            <td>
                                {val.find(x => x.measurementType == MeasurementType.CO2)?.value ?? "null"} ppm
                            </td>
                            <td>
                                {val.find(x => x.measurementType == MeasurementType.WATERLEVEL)?.value ?? "null"} %
                            </td>
                        </tr>
                    {/each}
            </tbody>
        </table>
    </figure>
</article>