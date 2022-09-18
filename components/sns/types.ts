const SNSNames = ['twitter', 'facebook'] as const

export type SNSName = typeof SNSNames[number]

// アカウントを所持しているSNS一覧
export type OwnedSNSName = SNSName

// シェア可能なSNS一覧
export type ShareableSNSName = SNSName
