<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    option: {
      type: Object,
      default: null
    }
  },
  mounted() {
     this.renderChart(this.chartdata, this.option)
  }
}
</script>