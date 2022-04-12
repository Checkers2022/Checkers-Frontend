import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Game from '../src/views/Game.vue'

const wrapper = mount(Game)

describe('Home mount test', ()=> {
    it('should mount', () => {
        const wrapper = mount(Game)
    })
})

describe('Game Contain Test', ()=> {
    it('should contain', ()=> {

        expect(wrapper.find('p').exists()).toBeTruthy()

        expect(wrapper.find('#exit-game-msg').exists()).toBeTruthy()
    })
})