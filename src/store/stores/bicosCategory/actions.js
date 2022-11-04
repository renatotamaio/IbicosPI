import { apiAuth } from "../../../plugins/axios"

export default {
    initialize({ commit }) {
        return new Promise(function (resolve, reject) {
            apiAuth.get('/ext/bicos-category/initialize').then(response => {
                commit('setBicosCategories', response.data.data)
                resolve(response.data.data)
            }).catch(error => {
                console.error(error)
                reject(error)
            })
        })
    }
}