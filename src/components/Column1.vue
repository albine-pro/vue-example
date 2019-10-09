<template>
    <div class="column__1" v-bind:class="{ __show_menu: showMenu }">
        <div class="close" @click="hideShowMenu(false)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                <path fill="#ffd54f" d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
            </svg>
        </div>
        <ul>
            <li @click="hideShowMenu(false)">
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                        <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z"></path>
                    </svg>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li @click="hideShowMenu(false)">
                <router-link to="/support">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                        <path d="M22 10.16V4C12 5 4 13.62 4 24s8 19 18 20v-6.16c-6-.96-12-6.8-12-13.84s6-12.88 12-13.84zM37.94 22H44c-.94-10-8-17.06-18-18v6.16C32 11.02 37.08 16 37.94 22zM26 37.84V44c10-.94 17.06-8 18-18h-6.06C37.08 32 32 36.98 26 37.84z"></path>
                    </svg>
                    <span>Support</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['showMenu'])
    },
    methods: {
        hideShowMenu(status) {
            this.$store.dispatch('hideShowMenuAction', status)
        }
    }
};
</script>

<style lang="scss">

@import '../assets/scss/base';


  .column__1{

       background: transparent;
       width: 20%;
       border-radius: 0 5px 5px 0;
       position: relative;
       z-index: 2;

      ul{

          padding: 0;
          position: absolute;
          top: 150px;
          left: 0;
          width: 100%;

          li{

          width: 60%;
          height: 50px;

              a{

              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding-left: 30px;
              font-size: 16px;
              transition: all .3s;
              border-radius: 0 5px 5px 0;
              color: $color_1;


            svg{

              transition: all .3s;
              fill: $color_1;

            }

            span{
              
              padding-left: 10px;
              font-family: $poiret;

            }

            }

            .router-link-exact-active{

                     background-color: $color_2;
                     color: $color_5;

              svg{

              fill: $color_5;

            }                          
             }

            }

        }


  }
</style>
