import Vue from 'vue'
import VueTouch from 'vue-touch'
import App from './components/App.vue'

Vue.use(VueTouch)

let app = {
    initialize: () => {

        return Promise.all(
        [
            new Promise((resolve, reject) => {
                document.addEventListener('deviceready', () => {
                    resolve()
                }, false)
            }),

            new Promise((resolve, reject) => {
                 window.addEventListener('filePluginIsReady', () => {
                    resolve()
                 }, false)
            })
        ]
        ).then( () => {

            Vue.config.devtools = true

            // mount a root Vue instance
            new Vue({   
              el: 'body',
              components: {
                // include the required component
                // in the options
                app: App

              }
            })
        })
    }
}

app.initialize();
//app.receivedEvent();