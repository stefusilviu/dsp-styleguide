export const state = () => ({
    sidebarCollapsed: false,
    isMobile: false
})

export const mutations = {
    toggleSidebar(state) {
        state.sidebarCollapsed = !state.sidebarCollapsed
    },
    changeIsMobile(state, payload) {
        state.isMobile = payload
    }
}