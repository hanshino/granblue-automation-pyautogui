import { createContext, useState } from "react"

export interface Settings {
    // Game settings.
    game: {
        combatScriptName: string
        combatScript: string[]
        farmingMode: string
        item: string
        mission: string
        map: string
        itemAmount: number
        summons: string[]
        summonElements: string[]
        groupNumber: number
        partyNumber: number
        debugMode: boolean
    }

    // Twitter settings.
    twitter: {
        twitterAPIKey: string
        twitterAPIKeySecret: string
        twitterAccessToken: string
        twitterAccessTokenSecret: string
    }

    // Discord settings.
    discord: {
        enableDiscordNotifications: boolean
        discordToken: string
        discordUserID: string
    }

    // Configuration settings.
    configuration: {
        enableAutoRestore: boolean
        enableFullElixir: boolean
        enableSoulBalm: boolean
        enableBezierCurveMouseMovement: boolean
        mouseSpeed: number
        enableDelayBetweenRuns: boolean
        delayBetweenRuns: number
        enableRandomizedDelayBetweenRuns: boolean
        delayBetweenRunsLowerBound: number
        delayBetweenRunsUpperBound: number
        enableRefreshDuringCombat: boolean
        enableAutoQuickSummon: boolean
        enableBypassResetSummon: boolean
        staticWindow: boolean
    }

    // Misc settings for the GUI.
    misc: {
        guiLowPerformanceMode: boolean
        alternativeCombatScriptSelector: boolean
    }

    // Arcarum Sandbox settings
    sandbox: {
        enableDefender: boolean
        enableCustomDefenderSettings: boolean
        numberOfDefenders: number
        defenderCombatScriptName: string
        defenderCombatScript: string[]
        defenderGroupNumber: number
        defenderPartyNumber: number
    }

    // Extra Settings related to Nightmares from certain Farming Modes.
    nightmare: {
        enableNightmare: boolean
        enableCustomNightmareSettings: boolean
        nightmareCombatScriptName: string
        nightmareCombatScript: string[]
        nightmareSummons: string[]
        nightmareSummonElements: string[]
        nightmareGroupNumber: number
        nightmarePartyNumber: number
    }

    // Settings specific to certain Farming Modes.
    event: {
        enableLocationIncrementByOne: boolean
        selectBottomCategory: boolean
    }

    raid: {
        enableAutoExitRaid: boolean
        timeAllowedUntilAutoExitRaid: number
        enableNoTimeout: boolean
    }

    arcarum: {
        enableStopOnArcarumBoss: boolean
    }

    generic: {
        enableForceReload: boolean
    }

    // Adjustment Settings.
    adjustment: {
        enableCalibrationAdjustment: boolean
        adjustCalibration: number
        enableGeneralAdjustment: boolean
        adjustButtonSearchGeneral: number
        adjustHeaderSearchGeneral: number
        enablePendingBattleAdjustment: boolean
        adjustBeforePendingBattle: number
        adjustPendingBattle: number
        enableCaptchaAdjustment: boolean
        adjustCaptcha: number
        enableSupportSummonSelectionScreenAdjustment: boolean
        adjustSupportSummonSelectionScreen: number
        enableCombatModeAdjustment: boolean
        adjustCombatStart: number
        adjustDialog: number
        adjustSkillUsage: number
        adjustSummonUsage: number
        adjustWaitingForReload: number
        adjustWaitingForAttack: number
        adjustCheckForNoLootScreen: number
        adjustCheckForBattleConcludedPopup: number
        adjustCheckForExpGainedPopup: number
        adjustCheckForLootCollectionScreen: number
        enableArcarumAdjustment: boolean
        adjustArcarumAction: number
        adjustArcarumStageEffect: number
    }
}

// Set the default settings.
export const defaultSettings: Settings = {
    game: {
        combatScriptName: "",
        combatScript: [],
        farmingMode: "",
        item: "",
        mission: "",
        map: "",
        itemAmount: 1,
        summons: [],
        summonElements: [],
        groupNumber: 1,
        partyNumber: 1,
        debugMode: false,
    },
    twitter: {
        twitterAPIKey: "",
        twitterAPIKeySecret: "",
        twitterAccessToken: "",
        twitterAccessTokenSecret: "",
    },
    discord: {
        enableDiscordNotifications: false,
        discordToken: "",
        discordUserID: "",
    },
    configuration: {
        enableAutoRestore: true,
        enableFullElixir: false,
        enableSoulBalm: false,
        enableBezierCurveMouseMovement: true,
        mouseSpeed: 0.2,
        enableDelayBetweenRuns: false,
        delayBetweenRuns: 15,
        enableRandomizedDelayBetweenRuns: false,
        delayBetweenRunsLowerBound: 15,
        delayBetweenRunsUpperBound: 60,
        enableRefreshDuringCombat: true,
        enableAutoQuickSummon: false,
        enableBypassResetSummon: false,
        staticWindow: true,
    },
    misc: {
        guiLowPerformanceMode: false,
        alternativeCombatScriptSelector: false,
    },
    nightmare: {
        enableNightmare: false,
        enableCustomNightmareSettings: false,
        nightmareCombatScriptName: "",
        nightmareCombatScript: [],
        nightmareSummons: [],
        nightmareSummonElements: [],
        nightmareGroupNumber: 1,
        nightmarePartyNumber: 1,
    },
    event: {
        enableLocationIncrementByOne: false,
        selectBottomCategory: false,
    },
    raid: {
        enableAutoExitRaid: false,
        timeAllowedUntilAutoExitRaid: 10,
        enableNoTimeout: false,
    },
    arcarum: {
        enableStopOnArcarumBoss: true,
    },
    generic: {
        enableForceReload: false,
    },
    adjustment: {
        enableCalibrationAdjustment: false,
        adjustCalibration: 5,
        enableGeneralAdjustment: false,
        adjustButtonSearchGeneral: 5,
        adjustHeaderSearchGeneral: 5,
        enablePendingBattleAdjustment: false,
        adjustBeforePendingBattle: 1,
        adjustPendingBattle: 2,
        enableCaptchaAdjustment: false,
        adjustCaptcha: 5,
        enableSupportSummonSelectionScreenAdjustment: false,
        adjustSupportSummonSelectionScreen: 30,
        enableCombatModeAdjustment: false,
        adjustCombatStart: 50,
        adjustDialog: 2,
        adjustSkillUsage: 5,
        adjustSummonUsage: 5,
        adjustWaitingForReload: 3,
        adjustWaitingForAttack: 100,
        adjustCheckForNoLootScreen: 1,
        adjustCheckForBattleConcludedPopup: 1,
        adjustCheckForExpGainedPopup: 1,
        adjustCheckForLootCollectionScreen: 1,
        enableArcarumAdjustment: false,
        adjustArcarumAction: 3,
        adjustArcarumStageEffect: 10,
    },
    sandbox: {
        enableDefender: false,
        enableCustomDefenderSettings: false,
        numberOfDefenders: 1,
        defenderCombatScriptName: "",
        defenderCombatScript: [],
        defenderGroupNumber: 1,
        defenderPartyNumber: 1,
    },
}

interface IProviderProps {
    readyStatus: boolean
    setReadyStatus: (readyStatus: boolean) => void
    isBotRunning: boolean
    setIsBotRunning: (isBotRunning: boolean) => void
    startBot: boolean
    setStartBot: (startBot: boolean) => void
    stopBot: boolean
    setStopBot: (stopBot: boolean) => void
    refreshAlert: boolean
    setRefreshAlert: (refreshAlert: boolean) => void
    settings: Settings
    setSettings: (settings: Settings) => void
}

export const BotStateContext = createContext<IProviderProps>({} as IProviderProps)

// https://stackoverflow.com/a/60130448 and https://stackoverflow.com/a/60198351
export const BotStateProvider = ({ children }: any): JSX.Element => {
    const [readyStatus, setReadyStatus] = useState<boolean>(false)
    const [isBotRunning, setIsBotRunning] = useState<boolean>(false)
    const [startBot, setStartBot] = useState<boolean>(false)
    const [stopBot, setStopBot] = useState<boolean>(false)
    const [refreshAlert, setRefreshAlert] = useState<boolean>(false)

    const [settings, setSettings] = useState<Settings>(defaultSettings)

    const providerValues: IProviderProps = {
        readyStatus,
        setReadyStatus,
        isBotRunning,
        setIsBotRunning,
        startBot,
        setStartBot,
        stopBot,
        setStopBot,
        refreshAlert,
        setRefreshAlert,
        settings,
        setSettings,
    }

    return <BotStateContext.Provider value={providerValues}>{children}</BotStateContext.Provider>
}
