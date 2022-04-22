/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";
import React from "react";

export default {

    //teams
    BasketTeams: async () => {

        const { data } = await Axios.get('https://www.balldontlie.io/api/v1/teams')

        return data;
    },
    SpecificBasketTeam: async (teamId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/teams/${teamId}`)

        return data;
    },
    // players
    EveryBasketPlayer: async () => {

        const { data } = await Axios.get('https://www.balldontlie.io/api/v1/players')

        return data;
    },
    SpecificBasketPlayer: async (playerId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/players/${playerId}`)

        return data;
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
        const dd = date.getDate() - 1
        const mm = date.getMonth() + 1 //initial month from 0 to 1
        const yyyy = date.getFullYear()

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/games?dates[]=${yyyy}-${mm}-${dd}`)

        return data;
    },
    SpecificFinishedBasketGameById: async (gameId) => {

        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=100`)

        return data;
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
    // stats


}