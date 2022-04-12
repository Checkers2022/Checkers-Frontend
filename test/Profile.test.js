/**
 * @vitest-enviroment
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Profile from '../src/views/Profile.vue'

describe('Profile Mount Test', () => {
    it('should mount Profile', () => {
        const wrapper = mount(Profile)
    })
})

describe('Profile Contain Test', ()=> {
    it('should contain', ()=> {
        const wrapper = mount(Profile)
        
        expect(wrapper.find('img').exists()).toBeTruthy()

        expect(wrapper.find('h2').exists()).toBeTruthy()

        expect(wrapper.find('.stars').exists()).toBeTruthy()

        expect(wrapper.find('.first_last').exists()).toBeTruthy()

        expect(wrapper.find('#dataInfo').exists()).toBeTruthy()

        expect(wrapper.find('#matchInfo').exists()).toBeTruthy()
    })
})

describe('Profile data Test', () => {
    it('setData test', async () => {
        const wrapper = mount(Profile)

        await wrapper.setData({
            avatar: "http://daisyui.com/tailwind-css-component-profile-1@40w.png",
            first_last_name: "First Last",
            username: "Username",
            tabName: "Info",
            stars: "Stars",
        })

        expect(wrapper.vm.avatar).toBe('http://daisyui.com/tailwind-css-component-profile-1@40w.png')

        expect(wrapper.vm.first_last_name).toBe('First Last')

        expect(wrapper.vm.username).toBe('Username')

        expect(wrapper.vm.tabName).toBe('Info')

        expect(wrapper.vm.stars).toBe('Stars')

    })
})
  