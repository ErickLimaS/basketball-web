/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";

export default {

    //teams
    GetBasketTeams: async () => {

        const { data } = await Axios.get('https://www.balldontlie.io/api/v1/teams')

        return data;
    },
    SpecificBasketTeam: async (id) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`)
        console.log(data)
        return data;
    },
    // players
    EveryBasketPlayer: async () => {

        const { data } = await Axios.get('https://www.balldontlie.io/api/v1/players')
        console.log(data)
        return data;
    },
    SpecificBasketPlayer: async (playerId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerId}&per_page=100`)

        return data;
    },
    GetPlayerFromTeam: async (playerId, teamId, gameId) => {
        try {

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&team_ids[]=${teamId}&player_ids[]=${playerId}&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`Error: ${error}`)
        }
    },
    GetPlayerLastGame: async (playerId) => {
        try {

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`Error: ${error}`)
        }
    },
    // games
    AllBasketGames: async () => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games`)

        return data;
    },
    GamesToday: async () => {

        const date = new Date();
        const dd = date.getDate()
        const mm = date.getMonth() + 1 //initial month from 0 to 1
        const yyyy = date.getFullYear()

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?dates[]=${yyyy}-${mm}-${dd}`)

        return data;
    },
    GamesFromYesterday: async () => {
        //to fix
        const date = new Date();
        let dd = date.getDate() - 1
        let mm = date.getMonth() + 1 //initial month from 0 to 1
        const yyyy = date.getFullYear()

        if (mm === 3 && dd === 0) {
            dd = 28;
            mm = mm - 1
        }
        else if ((mm === 2 || mm === 4 || mm === 6 || mm === 9 || mm === 11) && dd === 0) {
            dd = 31;
            mm = mm - 1
        }
        else if ((mm === 5 || mm === 7 || mm === 8 || mm === 10 || mm === 12) && dd === 0) {
            dd = 29;
            mm = mm - 1;
        }
        else if (mm === 1 && dd === 0) {
            dd = 31;
            mm = 12
        }

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?dates[]=${yyyy}-${mm}-${dd}`)

        return data;
    },
    SpecificFinishedBasketGameById: async (gameId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=100`)

        return data;
    },
    SpecificGameScore: async (gameId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games/${gameId}`)
        console.log(data)
        return { data };
    },
    SpecificFinishedBasketGameByTeam: async (teamId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${teamId}&period=4`)

        return data;
    },
    SpecificScheduledBasketGame: async (gameId, team1, team2) => {

        if (gameId) {
            if (team1 !== null || undefined) {
                const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${team1}&period=0`)

                if (team2 !== null || undefined) {

                    const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${team1}&team_ids=${team2}&period=0`)

                    return data;
                }
                return data;
            }
            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games/${gameId}&period=0`)

            return data;
        }
    },
    // season
    GetSeason: async (team, season) => {
        try {
            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${team}&seasons[]=${season}&per_page=100`)
            console.log(data)
            return data;
        }
        catch (error) {
            return console.log(`erro ${error}`)
        }
    },
    GetPresentSeason: async (team) => {
        try {
            const date = new Date()

            if ((date.getMonth() + 1) === 7 || (date.getMonth() + 1) === 8 || (date.getMonth() + 1) === 9) {
                const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${team}&seasons[]=${date.getFullYear() + 1}&per_page=100`)
                return data;
            } else {
                const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${team}&seasons[]=${date.getFullYear()}&per_page=100`)
                return data;
            }
        }
        catch (error) {
            return console.log(`erro ${error}`)
        }
    },
    // SEASON BEGINS IN OCTOBER, ENDS IN APRIL
    GetSelectSeasonOctober: async (season, id) => {
        try {
            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${season}-10-22&end_date=${season}-10-31&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },
    GetSelectSeasonNovember: async (season, id) => {
        try {

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${season}-11-01&end_date=${season}-11-30&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },
    GetSelectSeasonDecember: async (season, id) => {
        try {

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${season}-12-01&end_date=${season}-12-31&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },
    GetSelectSeasonJanuary: async (season, id) => {// january needs to be set on next year
        try {
            const seasonConverted = Number.parseInt(season) + 1

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${seasonConverted}-01-01&end_date=${seasonConverted}-01-31&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },
    GetSelectSeasonFebruary: async (season, id) => {
        try {
            const seasonConverted = Number.parseInt(season) + 1

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${seasonConverted}-02-01&end_date=${seasonConverted}-02-28&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },
    GetSelectSeasonMarch: async (season, id) => {
        try {
            const seasonConverted = Number.parseInt(season) + 1

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${seasonConverted}-03-01&end_date=${seasonConverted}-03-31&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },
    GetSelectSeasonApril: async (season, id) => {//postseason set to false
        try {
            const seasonConverted = Number.parseInt(season) + 1

            const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?team_ids[]=${id}&start_date=${seasonConverted}-04-01&end_date=${seasonConverted}-04-30&postseason=false&per_page=100`)

            return data;
        }
        catch (error) {
            return console.log(`ERROR: ${error}`)
        }
    },


}