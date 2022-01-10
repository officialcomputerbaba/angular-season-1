// This code is derived from the credits given below
// Author: https://github.com/ericgio
// Repo: https://github.com/ericgio/distance-utils

export const METERS_PER_KM = 1000;
export const METERS_PER_MILE = 1609.35;
export const FEET_PER_METER = 3.28084;

export function round(distance: number, precision: number = 0) {
  return +`${Math.round(+`${distance}e${precision}`)}e${-precision}`;
}

export function milesToKm(miles: number, precision?: number): number {
  console.log("Called ", miles);
  return round((miles * METERS_PER_MILE) / METERS_PER_KM, precision);
}

export function metersToMiles(meters: number, precision: number = 2): number {
  return round(meters / METERS_PER_MILE, precision);
}

export function metersToFeet(meters: number, precision?: number): number {
  return round(meters * FEET_PER_METER, precision);
}
