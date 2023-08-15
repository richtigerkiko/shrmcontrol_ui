import type { GetSensorEntriesResponse } from "./interface/GetSensorEntriesResponse"
import { Timeresolution } from "./interface/TimeResolution"

let baseUrl = "https://127.0.0.1:7257/api"

export async function getSensorEntries(logentry_count = 8, logentry_timeresolution: Timeresolution = Timeresolution.Minutes): Promise<GetSensorEntriesResponse> {
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