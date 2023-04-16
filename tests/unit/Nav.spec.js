import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

//Imported Components:
import Navbar from "@/components/Navbar.vue";
import FormComponent from "@/components//FormComponent.vue";
import UserPage from "@/components/UserPage.vue";
import HomePage from "@/components/HomePage.vue";

describe("NavBar", () => {

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

  const wrapper = shallowMount(Navbar, {
    global: {
      plugins: [router],
    },
  });

  it("should have all required router-link", () => {
    expect(wrapper.find("#brandName").exists()).toBe(true);
    expect(wrapper.find("#regBtn").exists()).toBe(true);
    expect(wrapper.find("#userBtn").exists()).toBe(true);
    
    // Check that the router-link texts are correct
    // expect(wrapper.find("#brandName").text()).toContain('Formkit-Form');
    // expect(wrapper.find("#regBtn").text()).toContain('Register-User');
    // expect(wrapper.find("#userBtn").text()).toContain('User-Info');
    // const linkTexts = wrapper.findAll("router-link").wrappers.map(w => w.text());
    // expect(linkTexts).toEqual(["Formkit-Form", "Register-User", "User-Info"]);
  });

  it("renders three router-links", async () => {
    await router.isReady();
    // Make sure there are three router-links
    expect(wrapper.findAllComponents({ name: "router-link" })).toHaveLength(3);
    // Check that the first router-link has the correct "to" prop
    expect(wrapper.findComponent({ name: "router-link" }).props("to")).toBe(
      "/"
    );
  });
});
