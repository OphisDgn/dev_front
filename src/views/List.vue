<template>
    <div class="searchUsers">
        <div class="row">
            <div class="container_father">
                <input class="searchInput" name="searchText" type= "text" placeholder="RECHERCHER" @keyup.enter="funSearch"/>
                <button class="btnSearch"></button>
            </div>
        </div>
    </div>
    <table class="tableUsers">
        <thead>
            <tr>
                <th style="display: none;">N°</th>
                <th>Gender</th>
                <th>Lastname</th>
                <th>Firstname</th>
                <th>Email</th>
                <th>Address - City - Country</th>
                <th>Longtitude - Latitude</th>
                <th>Numéro</th>
                <th>Animal préréré</th>
                <th>Fruit préréré</th>
                <th>Couleur préréré</th>
                <th>Film préréré</th>
            </tr>
        </thead>
        <tbody class="tableUsersBody">
            <tr v-for="user in list" :key="user.ID">
                <td style="display: none;">{{ user.id }}</td>
                <td>{{ user.gender == 'Female'? 'F' : 'M' }}</td>
                <td>{{ user.lastname }}</td>
                <td>{{ user.firstname }}</td>
                <td>{{ user.contact.email }}</td>
                <td>{{ user.contact.address }} <br/> {{ user.contact.city }} - {{ user.contact.country }}</td>
                <td>{{ user.contact.location.lon }} |<br/> {{ user.contact.location.lat }}</td>
                <td>{{ user.contact.phone }}</td>
                <td>{{ user.preferences.favorite_pet }}</td>
                <td>{{ user.preferences.favorite_fruit }}</td>
                <td>{{ user.preferences.favorite_color }}</td>
                <td>{{ user.preferences.favorite_movie }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import axios from 'axios'
import $ from 'jquery'


export default {
    name: 'List',
    data() {
        return {
            list: []
        }
    },
    
    methods: {
        funSearch: function () {
            let t = $('.searchInput')[0].val();
            let tb = $('.tableUsersBody')[0].children;
            
            for (var i = 0; i<tb.length;i++) {
                if (tb[i].textContent.toUpperCase().indexOf(t.toUpperCase()) == -1 && t.toUpperCase() != "" && t.toUpperCase() != null ) {
                    tb[i].css.display = "none";
                }
                else {
                    tb[i].css.display = "table";
                }
            }
        }
    }
}
</script>

<style scoped>
.searchUsers {
    margin: 30px 0px;
}
.row {
    padding: 0px 30px;
}
.container_father {
    position: relative;
    width: 500px;
}
.searchInput {
    height: 30px;
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
}
.btnSearch {
    position: absolute;
    background: none;
    border: none;
    bottom: 0;
    cursor: pointer;
    top: 0;
    right: 0;
}
.container_father input[type='text']:focus, .btnSearch:focus {
    outline: none !important;
    border: none !important;
    border-bottom: 1px solid #ccc !important;
}

.btnSearch::before {
    content: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' style='fill:%23595959' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.364 14.636L9.735 9.008a5.5 5.5 0 1 0-.706.708l5.628 5.627.707-.707zM1 5.5C1 3.019 3.019 1 5.5 1S10 3.019 10 5.5 7.981 10 5.5 10 1 7.981 1 5.5z'/%3E%3C/svg%3E");
    display: block;
    height: 22px;
    margin: 0 9px;
    width: 22px;
}
</style>