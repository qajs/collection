export default const Collection = {
    get: async(op) => {

        return new Promise( async resolve => {

            resolve(op)


        } )

    },
    save: async(op) => {
return new Promise( async resolve => {

    const { type, id, data } = op
    const config = {
        method: "PATCH"
    }
    const url = api.url(type) + id

    await fetch().then( response => {

            resolve( response )

    }
    )
    


        } )


    },
}