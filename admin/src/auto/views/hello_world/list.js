import listMixin from '@/mixin/list'
import JRemoteSelect from '@/components/remote-select'

var searchConditions = []

var operateConfig = {
  "add": {
    "isShow": true
  },
  "edit": {
    "isShow": true
  },
  "detail": {
    "isShow": true
  },
  "delete": {
    "isShow": true
  }
}

export default {
  mixins: [listMixin],
  components: {
    JRemoteSelect,
  },
  data() {
    return {
      KEY: 'hello_world',
      operateConfig,
      searchConditions,
    }  
  },
  mounted() {
    
  },
  methods: {

  }
}