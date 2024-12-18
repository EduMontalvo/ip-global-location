import { z } from 'zod'

export const LanguageData = z.object({
    code: z.string(),
    name: z.string(),
    native: z.string()
})

export const LocationData = z.object({
    calling_code: z.string(),
    capital: z.string(),
    country_flag: z.string(),
    country_flag_emoji: z.string(),
    languages: z.array(LanguageData)
})

export const TypeIpDataSchema = z.object({
    city: z.string(),
    continent_code: z.string(),
    continent_name: z.string(),
    country_code: z.string(),
    country_name: z.string(),
    ip: z.string(),
    latitude: z.number(),
    location: LocationData,
    longitude: z.number(),
    region_code: z.string(),
    region_name: z.string(),
    type: z.string()
})

