import {createApp, defineAsyncComponent, h} from "vue";

const useResolvedModal = (component, props) => {
    return new Promise((resolve) => {
        const dialogContainer = document.createElement("div")
        document.body.appendChild(dialogContainer)

        const app = createApp({
            setup() {
                const onDestroy = (result) => {
                    app.unmount()
                    document.body.removeChild(dialogContainer)
                    resolve(result)
                }
                return {
                    onDestroy,
                }
            },
            render() {
                return h(component, {
                    ...props,
                    onDestroy: this.onDestroy,
                })
            },
        })
        app.mount(dialogContainer)
    })
}

export const useAlertModal = async (props) => {
    const currentComponent = defineAsyncComponent(() => import('@/shared/ui/AlertModal.vue'))
    return await useResolvedModal(currentComponent, props)
}

