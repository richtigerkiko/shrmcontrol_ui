import { getSensorEntries } from '$lib/api';
import type { PageServerLoad  } from './$types';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const load: PageServerLoad  = async () => {
    var apiResponse = await getSensorEntries()
    return apiResponse
}