<template>
    <h2>Bienvenue dans les charts !</h2>
    <div class="pieContainer">
        <pie-chart v-if="isLoaded" :chartdata="chartdata" :option="option"/> 
    </div>
</template>

<script>
import PieChart from '../components/PieChart.vue'
import axios from 'axios'
import Peoples from '../datas/peoples.js'

export default {
    name: "Graphic",
    components: {
        PieChart
    },
    data () {
        return {
            isLoaded: false,
            chartdata: {
                datasets: [
                    {
                        type: 'pie',
                        label: 'Chat',
                        data: []
                    },
                    {
                        type: 'pie',
                        label: 'Chien',
                        data: []
                    },
                    {
                        type: 'pie',
                        label: 'Rat',
                        data: []
                    },
                    {
                        type: 'pie',
                        label: 'Oiseau',
                        data: []
                    },
                ]
            },
            option: {
                responsive: true
            },
            list_all:[],
            countCat: 0,
            countDog: 0,
            countRat: 0,
            countBird: 0
        }
    },
    beforeCreate() {
        axios(Peoples).then(res => {
            this.list_all = res.data.people;
            this.checkData();
            this.isLoaded = true;
        }).catch(error => {
            this.isLoaded = false;
            console.log(error)
        });
    },
    methods: {
        checkData: function () {
            let listC = [];
            let listD = [];
            let listR = [];
            let listB = [];

            for(var i in this.list_all) {
                let pet = this.list_all[i].preferences.favorite_pet;
                if (pet == "Cat") {
                    this.countCat += 1;
                } else if (pet == "Dog") {
                    this.countDog += 1;
                } else if (pet == "Rat") {
                    this.countRat += 1;
                } else if (pet == "Bird") {
                    this.countBird += 1;
                }
            }
            listC.push(this.countCat);
            listD.push(this.countDog);
            listR.push(this.countRat);
            listB.push(this.countBird);

            this.chartdata.datasets[0].data = listC;
            this.chartdata.datasets[1].data = listD;
            this.chartdata.datasets[2].data = listR;
            this.chartdata.datasets[3].data = listB;
        }
    }
}
</script>