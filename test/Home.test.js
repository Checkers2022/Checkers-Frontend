/**
 * @vitest-enviroment
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'

const wrapper = mount(Home)

describe('Home mount test', ()=> {
    it('should mount', () => {
        const wrapper = mount(Home)
    })
})

describe('Home Contain Test', ()=> {
    it('should contain', ()=> {

        expect(wrapper.find('.main-logo').exists()).toBeTruthy()

        expect(wrapper.find('#create-lobby-modal').exists()).toBeTruthy()

        expect(wrapper.find('#friends-modal').exists()).toBeTruthy()

        expect(wrapper.find('.dropdown').exists()).toBeTruthy()
    })
})

describe('SignUp Inputs Test', ()=> {
    it('value checks', async ()=> {

        const lobbyNameInput = wrapper.find('.input-name')
        await lobbyNameInput.setValue('name')
        expect(wrapper.find('.input-name').element.value).toBe('name')

        const startInput = wrapper.find('.input-star')
        await startInput.setValue('stars')
        expect(wrapper.find('.input-star').element.value).toBe('stars')

        const opponentInput = wrapper.find('.opponent-mail')
        await opponentInput.setValue('opponent')
        expect(wrapper.find('.opponent-mail').element.value).toBe('opponent')
    })
})