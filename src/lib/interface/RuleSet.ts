import type { Headunit } from "./Headunit";

export interface RuleSet {
    id: string | null;
    name: string;
    rules: Rule[];
    headunits: Headunit[] | null;
}

export interface Rule {
    id: string | null;
    measurementType: string;
    lowerThreshold: number;
    upperThreshold: number;
    lowerCritical: number;
    upperCritical: number;
    forceOn: boolean;
    forceOff: boolean;
}