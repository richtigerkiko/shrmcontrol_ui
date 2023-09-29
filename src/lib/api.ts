import type { GetSensorEntriesResponse } from "./interface/GetSensorEntriesResponse"
import type { Headunit } from "./interface/Headunit"
import type { RuleSet } from "./interface/RuleSet"
import { Timeresolution } from "./interface/TimeResolution"

let baseUrl = "https://shroomcontrol.warumhalbmast.de/api"

export async function getSensorEntries(logentry_count = 12, logentry_timeresolution: Timeresolution = Timeresolution.Hours): Promise<GetSensorEntriesResponse> {
    try {
        const response = await fetch(baseUrl + '/Sensor/GetSensorEntries?' + new URLSearchParams({
            count: logentry_count.toString(),
            timeResolution: logentry_timeresolution.toString()
        }))
        return await response.json() as GetSensorEntriesResponse
    }
    catch (e) { 
        console.log(e)
        throw e
    }
}

export async function getImages(count = 3): Promise<string[]>{
    try {
        const response = await fetch(baseUrl + '/Sensor/GetImages?' + new URLSearchParams({
            count: String(count)
        }))
        return await response.json() as string[]
    }
    catch (e) { 
        console.log(e)
        throw e
    }
}

export async function getHeadunits(): Promise<Headunit[]>{
    try {
        const response = await fetch(baseUrl + '/Administration/GetHeadunits')
        return await response.json() as Headunit[]
    }
    catch (e) { 
        console.log(e)
        throw e
    }
}

export async function getActiveRuleSet(headunit:string): Promise<RuleSet>{
    try {
        const response = await fetch(baseUrl + '/Rules/GetActiveRuleSet?' + new URLSearchParams({
            hostname: String(headunit)
        }))
        return await response.json() as RuleSet
    }
    catch (e) { 
        console.log(e)
        throw e
    }
}