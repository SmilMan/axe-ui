import Alert from './src/alert.vue'
import '../../styles/alert.scss'

Alert.install = app => {
  app.component(Alert.name, Alert)
}

export default Alert
