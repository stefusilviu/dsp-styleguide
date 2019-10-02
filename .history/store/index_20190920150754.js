export const state = () => ({
    sidebarCollapsed: false
})

export const mutations = {
    toggleSidebar(state) {
        state.sidebarCollapsed = !state.sidebarCollapsed
    }
}