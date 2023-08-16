import type { GetSensorEntriesResponse } from "./interface/GetSensorEntriesResponse"
import { Timeresolution } from "./interface/TimeResolution"

let baseUrl = "https://shroomcontrol.warumhalbmast.de/api"

export async function getSensorEntries(logentry_count = 12, logentry_timeresolution: Timeresolution = Timeresolution.Minutes): Promise<GetSensorEntriesResponse> {
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