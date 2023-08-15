import type { Headunit } from "./Headunit"
import type { MeasurementData } from "./Measurement"

export interface GetSensorEntriesResponse{
    measurements: MeasurementData
    headunit: Headunit
}
