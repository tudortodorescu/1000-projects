import randomPeople from "/app/data/randomPeople.js"

const API_URL = 'https://randomuser.me/api/?results=100'

export default class GuessFaceAPI {
    constructor() {
        this.randomPeopleData = []
        this.people = []
    }

    init() {
        return new Promise( async resolve => {
            await this.fetchRandomPeople()
            this.formatRandomPeopleData()
            resolve()
        })
    }

    fetchRandomPeople() {
        return new Promise( resolve => {
            this.randomPeopleData = randomPeople
            resolve()
            return

            axios.get( API_URL )
                .then( res => {
                    this.randomPeopleData = res?.data?.results
                    resolve()
                })
        })
    }

    formatRandomPeopleData() {
        this.people = this.randomPeopleData.map( peopleData => ({
            country: peopleData.location.country,
            image: peopleData.picture.large
        }))
    }
}