import {useModal} from "@/hooks"
import Confirm from "@/components/Common/Confirm.vue";

export const useConfirm = (value: string, onConfirm: () => void = () => {
}, onCancel: () => void = () => {
}) => useModal(Confirm, {value}, onConfirm, onCancel)