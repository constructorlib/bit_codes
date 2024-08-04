peaks = {
    {
        {400, 73, 38},
        {401, 56, 45},
        {398, 28, 47},
        {399, 43, 61},
        {20, 54, 74}
    },
    {
        {16, 86, 39},
        {397, 57, 30},
        {17, 30, 36},
        {24, 28, 77}
    },
    {
        {9, 31, 27},
        {6, 46, 24},
        {7, 77, 18},
        {3, 74, 43},
        {4, 63, 48},
        {8, 37, 66}
    },
    {
        {2, 34, 84},
        {1200, 46, 73},
        {1185, 50, 81},
        {1, 65, 74},
        {0, 64, 56}
    }
}

for i, zone in ipairs(peaks) do
    for _, wp in ipairs(zone) do
        if not C_QuestLog.IsQuestFlaggedCompleted(71224 - wp[1]) then
            SlashCmdList["TOMTOM_WAY"](format("#%d %d %d The Highest Peaks", i + 2022 - 1, wp[2], wp[3]))
        end
    end
end
