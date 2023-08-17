<script lang="ts">
    import { getHeadunits, getActiveRuleSet } from "$lib/api";
    import type { Headunit } from "$lib/interface/Headunit";
    import type { RuleSet } from "$lib/interface/RuleSet";
    import { onMount } from "svelte";

    let headunits: Headunit[] = []

    let selectedHeadunitHostname:string

    let activeRuleSet: RuleSet

    $: selectedHeadunit = headunits.find(headunit => headunit.hostname === selectedHeadunitHostname)

    onMount(async () => {
        headunits = await getHeadunits()
        if(headunits.length > 0){
            selectedHeadunitHostname = headunits[0].hostname
            activeRuleSet = await getActiveRuleSet(selectedHeadunitHostname)
        }
        

    });
</script>

<div class="container-fluid">
    <form>
        <article>
            <header>
                Headunit
            </header>
            <body>
                <label for="headunitselector">Select Headunit</label>
                <select name="headunitselector" id="headunitselector" bind:value={selectedHeadunitHostname} on:change={async () => activeRuleSet = await getActiveRuleSet(selectedHeadunitHostname)}>
                    {#each headunits as headunit}
                        <option value={headunit.hostname}>{headunit.hostname}</option>
                    {/each}
                </select>

                <div class="grid">
                    <div>
                        <label for="headunitHostname">hostname</label>
                        <input type="text" name="headunitHostname" id="headunitHostname" value={selectedHeadunit?.hostname} readonly disabled/>
                    </div>
                    <div>
                        <label for="lastOnline">Last Online</label>
                        <h3>{selectedHeadunit?.lastOnline}</h3>
                    </div>
                </div>
                <div class="grid">
                    <div>
                        <label for="headunitDescription">Desciption</label>
                        <input type="text" name="headunitDescription" id="headunitIp" value={selectedHeadunit?.description} readonly disabled/>
                    </div>
                    <div>
                        <label for="headunitlocation">Headunit Location</label>
                        <input type="text" name="headunitlocation" id="headunitIp" value={selectedHeadunit?.location} readonly disabled/>
                    </div>
                </div>
                <div class="grid">
                    <div></div>
                    <button class="secondary">Edit</button>
                    <div></div>
                </div>

                { JSON.stringify(selectedHeadunit) }
                
           
            </body>
        </article>
    </form>
    <form>
        <article>
            <header>
                Active Ruleset:
            </header>
            <body>
                <div class="grid">
                    <div>
                        <label for="rulesetName">Rule Set Name:</label>
                        <input type="text" name="rulesetName" id="rulesetName" value={activeRuleSet?.name} readonly disabled/>
                    </div>
                    <div></div>
                </div>
                {#if activeRuleSet?.rules.length > 0}
                    {#each activeRuleSet?.rules as rule}
                    <article>
                        <header>
                            <div class="grid">
                                <div>
                                    <label for="measurementtype">MeasurementType</label>
                                    <select name="measurementtype" bind:value={rule.measurementType}>
                                        <option value="TEMPERATURE">TEMPERATURE</option>
                                        <option value="HUMIDITY">HUMIDITY</option>
                                        <option value="CO2">CO2</option>
                                        <option value="WATERLEVEL">WATERLEVEL</option>
                                    </select>
                                </div>
                                <div></div>
                                <div>
                                    <small>
                                        Thresholds usually trigger an action, critical thresholds 
                                        trigger the same action and also send alerts. If a value is -1 
                                        the threshold is disabled.
                                    </small>
                                </div>
                            </div>
                        </header>
                        <body>
                            <div class="grid">
                                <div>
                                    <label for="lowerthreshhold">Lower Threshold</label>
                                    <input type="number" value="{rule.lowerThreshold}">
                                </div>
                                <div>
                                    <label for="upperthreshold">Upper Threshold</label>
                                    <input type="number" value="{rule.upperThreshold}">
                                </div>
                                <div>
                                    <label for="lowerthreshhold">Lower Critical</label>
                                    <input type="number" value={rule.lowerCritical}>
                                </div>
                                <div>
                                    <label for="lowerthreshhold">Lower UpperCritical</label>
                                    <input type="number" value="{rule.upperCritical}">
                                </div>
                            </div>
                            <div class="grid">
                                <div>
                                    <label for="forceon">Force Turn On</label>
                                    <input type="checkbox" role="switch" value="{rule.forceOn}">
                                </div>
                                <div>
                                    <label for="forceon">Force Turn Off</label>
                                    <input type="checkbox" role="switch" value="{rule.forceOff}">
                                </div>
                                <div class="grid">
                                    <button class="secondary">Edit</button>
                                    <button disabled>Save</button>
                                </div>
                            </div>
                        </body>
                    </article>

                    {/each}
                {/if}

            </body>
            <footer>
                {JSON.stringify(activeRuleSet)}
            </footer>
        </article>
    </form>
        <div class="grid">
            
        </div>
        <div>

        </div>

</div>