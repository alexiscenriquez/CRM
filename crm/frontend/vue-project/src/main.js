import {createApp} from 'vue'
import App from './App.vue'
import customerPicker from './components/customer-picker.vue'
import customerPickerItem from './components/customer-picker-item.vue'
import View from './components/View.vue'
import About from './components/About.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app=createApp(App)
 app.component('customer-picker', customerPicker);
 app.component('View',View)
 app.component('About',About)
 app.component('customer-picker-item',customerPickerItem)
 app.mount("#app")