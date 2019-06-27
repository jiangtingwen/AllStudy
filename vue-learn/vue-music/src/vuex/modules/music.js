import api from '../../api'
import * as types from '../types'
import {findIndex} from '@/common/util'

const state = {
    playList:[],
    currentIndex:-1,
    favoriteList:[],
    playHistory:[],
    playing: false
}
const mutations = {
    [types.SET_PLAY_LIST] (state,playlist) {
        state.playList = playlist
    },
    [types.SET_CURRENT_INDEX] (state,index) {
        state.currentIndex = index
    },
    [types.SET_PLAYING] (state,status) {
        state.playing = status
    },
    [types.SAVE_PLAY_HISTORY] (state,payload) {
        state.playHistory = payload
    },
    [types.SAVE_FAVORITE_LIST] (state,payload) {
        state.favoriteList = payload
    },

}
const actions = {
    selectPlaySong({commit,state},song) {
        let playlist = state.playList.slice()
        let currentIndex = state.currentIndex
        //查找当前列表中是否有待插入的歌曲，并返回其索引
        let fpIndex = findIndex(playlist,song)
        //如果已经包含这首歌
        if (fpIndex > -1) {
            currentIndex = fpIndex
        }else{
            playlist = [...playlist,song]
            currentIndex = playlist.length - 1
        }
        commit()
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}