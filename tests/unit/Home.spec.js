import { mount } from '@vue/test-utils';
import HomePage from '@/components/HomePage.vue';

describe ('HomePage', ()=>{
    const wrapper = mount(HomePage);

    it('should render HomePage text', () => {
        expect(wrapper.find('h1').exists()).toBeTruthy();
        expect(wrapper.find('h1').text()).toContain('Hello User!!  Welcome to my Application');
      });
})