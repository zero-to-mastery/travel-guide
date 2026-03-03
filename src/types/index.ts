export interface Currency {
    name: string
    symbol: string
}

export interface Country {
    name: { common: string }
    flags: { svg: string }
    region: string
    latlng: [number, number]
    capital: string[]
    population: number
    currencies: Record<string, Currency>
    languages: Record<string, string>
    timezones: string[]
    demonyms: { eng: { f: string; m: string } }
    idd: { root: string; suffixes: string[] }
    callingCodes?: string[]
    borders: string[]
    cca3: string
}