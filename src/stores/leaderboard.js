import { defineStore } from 'pinia';

export const useLeaderboardStore = defineStore('leaderboard', {
    state: () => ({
        players: [],
        teams: [
            {
                teamName: 'Team Vince',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Max Homa'
                    },
                    {
                        name: 'Tommy Fleetwood'
                    },
                    {
                        name: 'Abraham Ancer'
                    },
                    {
                        name: 'Danny Willett'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'K.H. Lee'
                    },
                    {
                        name: 'Sam Bennett'
                    }
                ]
            },
            {
                teamName: 'Team Audra',
                players: [
                    {
                        name: 'Jon Rahm'
                    },
                    {
                        name: 'Corey Conners'
                    },
                    {
                        name: 'Tommy Fleetwood'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Harris English'
                    },
                    {
                        name: 'Kazuki Higa'
                    },
                    {
                        name: 'Larry Mize'
                    }
                ]
            },
            {
                teamName: 'Team Brad',
                players: [
                    {
                        name: 'Rory Mcilroy'
                    },
                    {
                        name: 'Max Homa'
                    },
                    {
                        name: 'Adam Scott'
                    },
                    {
                        name: 'Seamus Power'
                    },
                    {
                        name: 'Chris Kirk'
                    },
                    {
                        name: 'Harris English'
                    },
                    {
                        name: 'Kevin Kisner'
                    },
                    {
                        name: 'Mateo Fernandez de Oliveira'
                    }
                ]
            },
            {
                teamName: 'Team Jason',
                players: [
                    {
                        name: 'Cameron Smith'
                    },
                    {
                        name: 'Will Zalatoris'
                    },
                    {
                        name: 'Patrick Reed'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Billy Horschel'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'Bernhard Langer'
                    },
                    {
                        name: 'Vijay Singh'
                    }
                ]
            },
            {
                teamName: 'Team Adam',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Cameron Young'
                    },
                    {
                        name: 'Tyrrell Hatton'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Billy Horschel'
                    },
                    {
                        name: 'Kevin Na'
                    },
                    {
                        name: 'Kevin Kisner'
                    },
                    {
                        name: 'Larry Mize'
                    }
                ]
            },
            {
                teamName: 'Team Bobby',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Will Zalatoris'
                    },
                    {
                        name: 'Min Woo Lee'
                    },
                    {
                        name: 'Abraham Ancer'
                    },
                    {
                        name: 'Billy Horschel'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'Kevin Kisner'
                    },
                    {
                        name: 'Fred Couples'
                    }
                ]
            },
            {
                teamName: 'Team Jeff',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Will Zalatoris'
                    },
                    {
                        name: 'Justin Rose'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'Bernhard Langer'
                    },
                    {
                        name: 'Fred Couples'
                    }
                ]
            },
            {
                teamName: 'Team Seth',
                players: [
                    {
                        name: 'Rory Mcilroy'
                    },
                    {
                        name: 'Sungjae Im'
                    },
                    {
                        name: 'Joaquin Niemann'
                    },
                    {
                        name: 'Abraham Ancer'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Adam Svensson'
                    },
                    {
                        name: 'K.H. Lee'
                    },
                    {
                        name: 'Mateo Fernandez de Oliveira'
                    }
                ]
            },
        ]
    }),
    actions: {
        async fetchLeaderboard() {
            try {
                const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401465508");
                const data = await response.json();
                
                this.players = data.events[0].competitions[0].competitors;
            } catch (error) {
                console.log(error)
            }
        },
        getTeamScore(list) {
            let totalScore = 0;
            const playerList = this.getPlayersList(list);

            playerList.forEach((player, i) => {
                if (i < 3) {
                    if (player) {
                        console.log(player);
                        totalScore += player.score?.value;
                    }
                }
            });

            console.log('total score', totalScore);

            return totalScore;
        },
        getPlayersList(list) {
            const players = this.players;
            let playerList = [];

            list.forEach(item => {
                const filterPlayer = players.find(player => player.athlete?.displayName.toLowerCase() === item.name.toLowerCase());
                playerList = [...playerList, filterPlayer];
            });

            playerList.sort((a, b) => (a.score.value > b.score.value) ? 1 : -1);

            return playerList;
        }
    },
});
