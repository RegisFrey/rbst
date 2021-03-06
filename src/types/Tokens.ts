export enum Category {
    Color='Color',
    Spacing='Spacing',
    BorderRadius='BorderRadius',
    FontSize='FontSize',
    // FontWeight='FontWeight',
}

export enum SizeUnit {
    Pixels='px',
    Points='pt',
    Em='em',
    Rem='rem',
    Percentage='%',
    ViewWidth='vw',
    ViewHeight='vh'
    // TODO:FUTURE: cm, mm, Q, in, pc, pt
}

export interface TokenMetadata {
    category?: Category
    prefix?: string
    type?: string
    // Q. Enum?
    // Q. needed if defining in a typed lanugage?
    // Maybe for serializing to JSON? or if using string.
    unit?: SizeUnit
    export?: boolean
}

// [10, "px"] // value and unit
export type TokenValueWithSizeUnit = [number, SizeUnit];

export type TokenValue = string|number|TokenValueWithSizeUnit;

export interface TokenDefinition {
    value: TokenValue;
}

export interface ResolvedToken {
    path: Array<string>
    value: number // | Color
    originalValue: TokenValue
    unit: SizeUnit
    type: string
    export: boolean
}

export interface TokenGroup {
    // ...Optional<TokenMetadata>,
    tokens: { [name:string]: TokenValue|TokenDefinition }
}

export type ResolvedTokenGroup = Array<ResolvedToken>;

/*
export interface ResolvedTokenGroup {
    tokens: Array<ResolvedToken>
}
*/