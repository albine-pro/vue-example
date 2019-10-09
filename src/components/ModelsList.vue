<template>
    <div class="auto_list__block">
        <h4>Your garage</h4>

        <div class="auto_list__block_w">

            <div class="auto_list__block_w_i" v-for="model in models" v-bind:key="model.id" @click="changeActiveModelData(model.id)">
                <div class="auto_list__block_w_i__info">
                    <div v-bind:class="{ anim: model.name === activeModel.name }">
                        <img :src="require('@/assets/img/' + model.name + '.png')" :alt="model.name">
                    </div>
                    <div>
                        <span>{{ model.name }}</span>
                    </div>
                    <div>
                        <span>$</span>
                        <span>{{ model.price }}</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="auto_list__block__change">
            <div @click="moveAutoList(false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                    <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path>
                </svg>
            </div>
            <div @click="moveAutoList(true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                    <path d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            templateModelIndex: 0
        }
    },
    methods: {
        changeActiveModelData(modelId) {
            this.$store.dispatch('setActiveModel', modelId)
            this.$store.dispatch('menuDetailsAnim')
        },
        moveAutoList(direction) {

            const models = Array.from(document.getElementsByClassName('auto_list__block_w_i'))

            if (!direction && this.templateModelIndex === 0) return

            if (direction && (this.templateModelIndex + 1) === models.length) return

            direction ? this.templateModelIndex++ : this.templateModelIndex--
            const h = '-' + (models[this.templateModelIndex].offsetHeight * this.templateModelIndex)

            for (let i = 0; i < models.length; i++) {
                this.helpers.crossBrowserTranslate(models[i], 'translateY', h)
            }

        },

    },
    computed: {
        ...mapState(['models', 'miles', 'activeModel'])
    }
};
</script>

<style lang="scss">

@import '../assets/scss/base';

.auto_list__block{

	width: 85%;
	margin: 40px auto;
	position: relative;



	h4{
	
	font-size: 16px;
	padding: 10px 0 0 0;

	}

	&_w{

		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		


		&_i{
            padding: 10px;
            transition: all .3s;
            

   			&__info{

			   width: 80%;
			   border-radius: 3px;
			   background-color: $color_4;
			   display: flex;
               cursor: pointer;
		   	   align-items: center;
		      justify-content: space-around;						      
		      padding: 5px 0;


			   div{

			   		flex: 1 1 auto;
			   		transition: all .3s;


			   		&.anim{
			   			transform: translate(10px, 0px) scale(1.3)
			   		}

				   	&:first-of-type{

				   	    text-align: center;

				   		img{

				   			width: 40px;

				   		}

				   }

				   &:nth-of-type(2){

				   		font-weight: 600;
				   		text-transform: capitalize

					}


				   	&:last-of-type{

				   	    text-align: center;

				   }


				}


				&.active{

					background: $color_1;
				    color: $color_5;
				    box-shadow: 0 0 10px $color_1;

				}

   			}

		}

	}




	&__change{

		position: absolute;    				
    padding: 10px;
    width: 30px;
    height: 60px;
    right: -3%;
    top: 37%;
    cursor: pointer;

    div{

    	display: flex;
    	justify-content: center;
    	align-content: center;
    	border-radius: 2px;
		width: 100%;
	    height: 50%;
	    box-shadow: 0 0 10px $color_4;
	    margin: 10px 0;
	    transition: all 0.3s;
	    background: #ffd54f;

		svg{

			fill: $color_5;
			padding: 5px;
			transition: all .2s;

		}

	}
	}

}

</style>
