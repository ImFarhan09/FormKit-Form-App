import { shallowMount,createLocalVue } from '@vue/test-utils'
import FormComponent from '@/components/FormComponent.vue';
import Vuex from 'vuex'

// Create a local Vue instance with Vuex store installed
// const localVue = createLocalVue()
// localVue.use(Vuex)

describe('FormComponent', () => {
  const wrapper = shallowMount(FormComponent);

  it('should render registration form', () => {
    expect(wrapper.find('h1').text()).toContain('Registration Form');
  });

  it('should have all required form fields', () => {
    expect(wrapper.find('[name="fname"]').exists()).toBe(true);
    expect(wrapper.find('[name="lname"]').exists()).toBe(true);
    expect(wrapper.find('[name="mobile"]').exists()).toBe(true);
    expect(wrapper.find('[name="email"]').exists()).toBe(true);
    expect(wrapper.find('[name="password"]').exists()).toBe(true);
    expect(wrapper.find('[name="password_confirm"]').exists()).toBe(true);
    expect(wrapper.find('[name="dob"]').exists()).toBe(true);
    expect(wrapper.find('[name="gender"]').exists()).toBe(true);
    expect(wrapper.find('[name="skills"]').exists()).toBe(true);
    expect(wrapper.find('[name="degree"]').exists()).toBe(true);
    expect(wrapper.find('[name="acceptance"]').exists()).toBe(true);
  });

  it('should render all the form fields', () => {
    const formFields = wrapper.findAll('FormKit');
    expect(formFields).toHaveLength(12);
  });

  it('should set the default data properly', () => {
    expect(wrapper.vm.options).toEqual({
      "": "Select",
      Male: "Male",
      Female: "Female",
      Other: "Other",
    });
    expect(wrapper.vm.doptions).toEqual({
      "B.E./B.Tech": "B.E./B.Tech",
      "BCA/MCA": "BCA/MCA",
    });
    expect(wrapper.vm.soptions).toEqual({
      "ReactJS": "ReactJS",
      "AngularJS": "AngularJS",
      "VueJS": "VueJS",
    });
    expect(wrapper.vm.userData).toEqual({});
  });

  it('renders the FormKit component', () => {
    expect(wrapper.find('FormKit').exists()).toBe(true)
  });

  // it('should emit a submit event when the form is submitted', async () => {
  //   const form = wrapper.find('FormKit');
  //   await form.trigger('submit');
  //   expect(wrapper.emitted('submit')).toBeTruthy();
  // });

});
