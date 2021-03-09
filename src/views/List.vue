<template>
    <div>
        <div class="searchUsers">
            <form href="#">
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-xs-12 container_father">
                        <p class="input_container">
                            <input type="text" name="search" id="Csearch" class="input_apply">
                            <label for="Csearch" class="labels">RECHERCHE</label>
                            <button type="submit" class="btn-submitSearch"><i class="fa fa-search"></i></button>
                        </p>
                    </div>
                </div>    
            </form>
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
                    <th>Phone</th>
                    <th>Animal pref</th>
                    <th>Fruit pref</th>
                    <th>Color pref</th>
                    <th>Movie pref</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in list" :key="user.ID">
                    <td style="display: none;">{{ user.id }}</td>
                    <td>{{ user.gender == 'Female'? 'F' : 'M' }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.contact.email }}</td>
                    <td>{{ user.contact.address }} <br/> {{ user.contact.city }} - {{ user.contact.country }}</td>
                    <td>{{ user.contact.location.lon }} - {{ user.contact.location.lat }}</td>
                    <td>{{ user.contact.phone }}</td>
                    <td>{{ user.preferences.favorite_pet }}</td>
                    <td>{{ user.preferences.favorite_fruit }}</td>
                    <td>{{ user.preferences.favorite_color }}</td>
                    <td>{{ user.preferences.favorite_movie }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'List',
    mounted() {
        fetch("https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7")
        .then(response => response.json())
        .then(data => {
            this.list = data.people;
        })
    }
}
$(function() {
    $(".input_apply").each(function() { 
        if ($(this).val() != "") {
        $(this).parent().parent().addClass("animation");
        }
    });
});
$(".input_apply").focus(function(){
    $(this).parent().parent().addClass("animation animation-color");
});

$(".input_apply").focusout(function(){
    if($(this).val() == "") {
    $(this).parent().parent().removeClass("animation");
    $(this).parent().parent().removeClass("animation-color");
    }
});
    
</script>

<style>

.container_father {
    margin-bottom: 20px;
}

.input_container {
    width: 100%;
    position: relative;
    margin-bottom: 25px;
}

.labels {
    font-size: 16px;
    color: #424242;
    position: absolute;
    cursor: text;
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    left: 0;
    bottom: -25px;
}

.input_apply {
    width: 100%;
    height: 40px;
    font-size: 16px;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    border: none !important;
    border-bottom: 1px solid #CCC !important;
    background-color: transparent;
    outline: none !important;
}

form input[type=text]:focus {
    outline: none !important;
    border: none !important;
    border-bottom: 1px solid #28a2a2 !important;
}

.animation .labels {
    -webkit-transform: translateY(-45px);
    transform: translateY(-45px);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
}

.animation-color .labels {
    color: #28a2a2;
}
.btn-submitSearch {
    position: absolute;
    border: none;
    border-bottom: 1px solid #CCC;
    padding: 5px 15px 5px 15px;
    background: none;
}
</style>