import { Timeresolution } from '$lib/interface/TimeResolution';
import { writable, type Writable } from 'svelte/store';

export const active_time_resolution: Writable<Timeresolution> = writable(Timeresolution.Minutes)


