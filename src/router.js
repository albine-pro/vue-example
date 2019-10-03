import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Details from "./views/Details.vue";
import Support from "./views/Support.vue";
import TabsMain from "@/components/TabsMain.vue"
import TabsDetails from "@/components/TabsDetails.vue"
import ModelsList from "@/components/ModelsList.vue";
import InfoBlockMain from "@/components/InfoBlockMain.vue";
import InfoBlockDetails from "@/components/InfoBlockDetails.vue";
import ImgBlock from "@/components/ImgBlock.vue"
import DetailsBtn from "@/components/DetailsBtn.vue"
import Column4 from "@/components/Column4.vue"
import TitleMain from "@/components/TitleMain.vue"
import TitleDetails from "@/components/TitleDetails.vue"
import TitleSupport from "@/components/TitleSupport.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main-page",
      components: {
        default: Main,
        tabs: TabsMain,
        models: ModelsList,
        info_block: InfoBlockMain,
        img_block: ImgBlock,
        details_btn: DetailsBtn,
        title_info: TitleMain
      }
    },
    {
      path: "/details/:model",
      name: "details",
      components: {
        default: Details,
        tabs: TabsDetails,
        info_block: InfoBlockDetails,
        img_block: ImgBlock,
        details_btn: DetailsBtn,
        column4: Column4,
        title_info: TitleDetails
      }
    },
    {
      path: "/support",
      name: "support",
      components: {
        default: Support,
        title_info: TitleSupport
      }
    }
  ]
});
