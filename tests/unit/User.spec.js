import { mount } from "@vue/test-utils";
import UserPage from "@/components/UserPage.vue";
import { createStore } from "vuex";

describe("UserPage", () => {
  // Define the test data
  const testData = {
    email: "farhan@xyz.com",
    fname: "Mohammad",
    lname: "Farhan",
  };

  // Create a Vuex store with the test data
  const store = createStore({
    state: {
      data: testData,
    },
    getters: {
      getData: (state) => state.data,
    },
  });

  //Mount the component with the Vuex store

  const wrapper = mount(UserPage, {
    global: {
      plugins: [store],
    },
  });

  it("should render User Information", () => {
    expect(wrapper.find("h1").text()).toContain("User Information");
  });

  it("fetches data from the store", async () => {
    // Wait for the component to update
    await wrapper.vm.$nextTick();

    // Assert that the data is displayed correctly
    expect(wrapper.text()).toContain(testData.lname);
  });
});
