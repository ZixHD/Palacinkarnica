<template>
    <div>
        <MainHeader :title="headerTitle" />
        <b-alert :variant="statusnaPorukaTip" :show="statusnaPoruka!=null">
            {{ statusnaPoruka }}
        </b-alert>
        <div>
                <b-container fluid>
                    <b-row>
                        <b-col sm="3">
                            <label for="ime_prezime">Ime i prezime</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input id="ime_prezime" 
    					:state="validnoIme"
                        v-model="forma.ime_prezime"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="3">
                            <label>Adresa</label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-input id="adresa" 
                            :state="validnaAdresa"
                            v-model="forma.adresa"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm ="3">
                            <label>Kontakt telefon</label>
                        </b-col>
                        <b-col sm = "9">
                            <b-form-input id = "telefon"
                                :state = "validanTelefon"
                                v-model="forma.telefon"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="3">
                            <label>
                                Dodajte podatke svoje narudbzine
                            </label>
                        </b-col>
                        <b-col sm="9">
                            <b-form-textarea id="textarea"  
                            rows="4"></b-form-textarea>
                        </b-col>
                    </b-row>
                </b-container>
                <b-button @click="posalji()" variant="primary">Posalji</b-button>
            </div>
            </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'
import MainHeader from '@/components/Header.vue'


export default {
    name: 'HomeView',
    components: {
        MainHeader,
    },
    data() {
        return {
            headerTitle: "Narudzbina",
            statusnaPoruka: null,
            statusnaPorukaTip: null,
            forma: {
                id: 4,
                ime_prezime: null,
                adresa: null,
                telefon: null,
                status: "Novo",
                user_id: 1,
                zakazano_vreme: new Date(),
                vreme_narucivanja: new Date(),

                
            }
        }
    },
    computed: {
        validnoIme() {
            if (this.forma.ime_prezime == null) return null;
            else if (this.forma.ime_prezime.length > 8) return true
            else return false;
        },
        validnaAdresa() {
            if (this.forma.adresa == null) return null
            else if (this.forma.adresa.length > 10) return true
            else return false
        },
        validanTelefon() {
            if (this.forma.telefon == null) return null
            else if (this.forma.telefon.length >2) return true
            else return false
        },
        
    },
    methods: {
        posalji() {
            if (this.validnoIme && this.validnaAdresa && this.validanTelefon) {
                fetch("http://localhost:9000/narudzbina", {
                    headers: {
                        "Content-Type": 'application/json',
                       'Authorization': `Bearer ${localStorage.token}`
                       
                    },
                    method: "POST",
                    body: JSON.stringify(this.forma)
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        if (res.error) {
                            this.statusnaPoruka = res.error;
                            this.statusnaPorukaTip = 'danger';
                        } else {
                            this.statusnaPoruka = "Narudzbina je uspesno poslata";
                            this.statusnaPorukaTip = 'success'
                        }
                })
            }
            else {
                alert("Lose napisana forma");
                return;
            }
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
