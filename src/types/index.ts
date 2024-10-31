
type FamilyInfo = {
    father?: string
    mother?: string
    godfather?: string
    son?: string
    wife?: string
    daughter?: string
    brother?: string
    grandmother?: string
}

type AgeInfo = {
    "Part I"?: string
    "Part II"?: string
}

type HeightInfo = {
    "Blank Period"?: string
    "Part I"?: string
}

type NinjaRankInfo = {
    "Blank Period"?: string
    Gaiden?: string
    "Part I"?: string
    "Part II"?: string
}

type PersonalInfo = {
    age?: AgeInfo
    birthdate: string
    bloodType: string
    clan: string
    height?: HeightInfo
    sex: string
}

type RankInfo = {
    ninjaRank: NinjaRankInfo
}

export type Character = {
    images: Array<string>
    id: number
    name: string
    family?: FamilyInfo
    personal: PersonalInfo
    tools?: Array<string>
    rank?: RankInfo
}

export type CharacterComplete = {
    character: Character
}
