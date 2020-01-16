import Vue from 'vue'
import {
  Scrollbar,
  Menu,
  Submenu,
  MenuItem,
  Message,
  Button
} from 'element-ui'

Vue.use(Scrollbar)
  .use(Menu)
  // .use(Message)
  .use(Submenu)
  .use(MenuItem)
  .use(Button)

Vue.prototype.$message = Message
Vue.prototype.$ELEMENT = { size: 'small' }
