<template>
    <div class="searchUsers">
        <div class="row">
            <div class="container_father">
                <input class="searchInput" name="searchText" type= "text" placeholder="Rechercher..." @keyup.enter="funSearch"/>
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

export default {
    name: 'List',
    mounted() {
        fetch("https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7")
        .then(response => response.json())
        .then(data => {
            this.list = data.people;
        })
    },
    methods: {
        funSearch() {
            let t = document.getElementsByClassName('searchInput')[0].value;
            let tb = document.getElementsByClassName('tableUsersBody')[0].children;

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
    width: 500px;
}

</style>