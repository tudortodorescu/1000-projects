
const RandomPeopleApp = {
    data() {
      return {
        howManyPeople: 9,
        listOfPeople: [],
        isLoading: false
      }
    },
    computed: {
        listOfPeopleComputed() {
            return this.listOfPeople.map(person => ({
                title:          person.name.title,
                fullName:       `${ person.name.first } ${ person.name.first }`,
                email:          person.email,
                profileImage:   person.picture.large
            }))
        }
    },
    methods: {
        getRandomPeople() {
            this.startLoader()

            const url = `https://randomuser.me/api/?results=${ this.howManyPeople }`
            axios.get( url ).then( res => {
                this.listOfPeople = res?.data?.results || []
                this.stopLoader()
            })
        },
        resetListOfPeople() {
            this.listOfPeople = []
        },

        ////////////////

        startLoader() {
            this.isLoading = true
        },
        stopLoader() {
            this.isLoading = false
        }
    }
}

Vue.createApp( RandomPeopleApp ).mount( '#RandomPeopleApp' )