import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

//Imported Components:
import App from "@/App.vue";
import NavBar from "@/components/Navbar.vue";
import FormComponent from "@/components//FormComponent.vue";
import UserPage from "@/components/UserPage.vue";
import HomePage from "@/components/HomePage.vue";

describe("App", () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: "Home",
        component: HomePage,
        path: "/",
      },
      {
        name: "Register",
        component: FormComponent,
        path: "/register",
      },
      {
        name: "User Info",
        component: UserPage,
        path: "/user",
      },
    ],
  });

  const wrapper = shallowMount(App, {
    global: {
      plugins: [router],
    },
  });

  it("Should render NavBar Component", () => {
    expect(wrapper.findComponent(NavBar).exists()).toBe(true);
  });

  it("Should render a Component via routing", async () => {
    router.push("/register");
    await router.isReady();

    expect(wrapper.findComponent(FormComponent).exists()).toBe(true);
  });
});
