import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Game from '../src/views/Game.vue'
import CheckerBoard from '../src/components/boardComponents/CheckerBoard.vue'
import Cell from '../src/components/boardComponents/Cell.vue'
import Player from '../src/components/boardComponents/Player.vue'

describe('Game mount test', ()=> {
    it('should mount', () => {
        const wrapper = mount(Game)

        expect(wrapper.findComponent(CheckerBoard).exists()).toBeTruthy()
        
    })
})

describe('Game Contain Test', ()=> {
    it('should contain', ()=> {
        const wrapper = mount(Game)

        expect(wrapper.find('p').exists()).toBeTruthy()

        expect(wrapper.find('#exit-game-msg').exists()).toBeTruthy()
    })
})

describe('CheckerBoard mount test', ()=> {
    it('should mount', () => {
        const wrapper = mount(CheckerBoard)

        expect(wrapper.findComponent(Player).exists()).toBeTruthy()
    })
})