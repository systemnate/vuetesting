import { expect } from 'chai'
import { mount } from 'avoriaz'
import App from '../../app/javascript/packs/App.vue';

describe('App.vue', () => {
  it('has a root element with an id of app', () => {
    const wrapper = mount(App)
    expect(wrapper.is('#app')).to.equal(true)
  })
  it('has a message set to Hello Vue!', () => {
    const wrapper = mount(App)
    expect(wrapper.data().message).to.equal('Hello Vue!')
  })
})
