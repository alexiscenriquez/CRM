import {createApp} from 'vue'
import App from './App.vue'
import customerPicker from './components/customer-picker.vue'
import customerPickerItem from './components/customer-picker-item.vue'
import About from './components/About.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app=createApp(App)
 app.component('customer-picker', customerPicker);
 app.component('About',About)
 app.component('customer-picker-item',customerPickerItem)
 app.use(router)
 app.mount("#app")
