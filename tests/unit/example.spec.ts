import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HomeHeader.vue'

describe(`HelloWorld.vue`, () => {
  it(`renders props.msg when passed`, () => {
    const msg = `This is a home page`
    const wrapper = shallowMount(HelloWorld, {
      props: {msg},
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
