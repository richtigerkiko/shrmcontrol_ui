<script lang="ts">
	import { Chart, type ChartComponent, type ChartConfiguration, type ChartDataset } from 'chart.js/auto';
	import 'chartjs-adapter-moment';
    import { MeasurementType, type MeasurementData, type Measurement } from '../interface/Measurement';
    import { onMount } from 'svelte';
    export let chartData: MeasurementData


	let chart: Chart;
    let chartElement: HTMLCanvasElement;

    // generate distinctive arrays from existing Measurementtypes
    let flatArray = Object.values(chartData).flat()
    let processedChartData = new Map()
    for(let type in MeasurementType){
        if(flatArray.some(x => x.measurementType == type)) {
            processedChartData.set(MeasurementType[type], flatArray.filter(x => x.measurementType == type))
        }
    }

    let datasets:ChartDataset[] = []
    let aaa  = [...processedChartData]
    aaa.forEach((kv, i) => {
        datasets.push({
            label: kv[0] as string,
            data: (kv[1] as Measurement[]).map(x => x.value),
            yAxisID: 'y' + i

        } as ChartDataset)
    })

    let a = Object.values(chartData).flat()
    const config: ChartConfiguration = {
        type: "line",
        data: {
            labels: Object.keys(chartData),
            datasets: datasets
        },
        options: {
            scales: {
                x: {
                    type: 'time',
					time: {
						unit: 'hour',
						tooltipFormat: 'yyyy-MM-DD HH:mm:ss'
					}
                }
            },
            plugins: {
                zoom:{
                    pan:{
                        enabled: true,
                        mode: 'x'
                    },
                    zoom:{
                        wheel: {
                            enabled: true
                        },
                        mode: 'x'
                    }
                }
            }
        }
    }


    onMount(async () => {
        const zoomPlugin = await import('chartjs-plugin-zoom')
        chart = new Chart(chartElement, config)
        Chart.register(zoomPlugin.default)
    })
</script>

<canvas bind:this={chartElement} />