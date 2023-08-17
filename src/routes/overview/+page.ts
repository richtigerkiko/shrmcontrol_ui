import { getImages, getSensorEntries } from '$lib/api';
import type { GetSensorEntriesResponse } from '$lib/interface/GetSensorEntriesResponse';
import type { PageLoad  } from './$types';

// for debug and local server
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

interface OverViewPageData {
    measurementResponse: GetSensorEntriesResponse
    webcamImages: string[]
}

export const load: PageLoad  = async () => {
    var pageresult: OverViewPageData = {} as OverViewPageData

    let images =  getImages(8)
    var apiResponse = await getSensorEntries()
    Object.values(apiResponse.measurements).forEach(x => {
        x.forEach(y => {
            y.value = parseFloat(y.value.toFixed(2))
        })
    })

    pageresult.measurementResponse = apiResponse
    pageresult.webcamImages = await images
    

    return pageresult
}