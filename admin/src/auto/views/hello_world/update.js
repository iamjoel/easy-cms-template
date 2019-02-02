import updateMixin from '@/mixin/update'
import modelScheme from './model'
import JRemoteSelect from '@/components/remote-select'
import deepClone from 'clone'

var model = {
  "moreInfo": {},
  "name": null
}

var rules = {
  "name": [
    { required: true, message: '请输入名称', trigger: 'blur' }
  ]
}

export default {
  mixins: [updateMixin],
  components: {
   'j-remote-select': JRemoteSelect,
  },
  data() {
    return {
      KEY: 'hello_world',
      model,
      modelScheme,
      rules,
    }  
  },
  methods: {
    formatFetchData(model) {
      model = deepClone(model)

      // 下拉框赋值
      if(!this.isView) {

      } else {

      }

      return model
    },
    formatSaveData() {
      var model = deepClone(this.model)

      return model
    },


  },
  mounted() {
    
  }
}