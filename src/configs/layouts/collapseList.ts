import type {ICollapseItem} from "@/types";
import ChartSelect from "@/components/Edit/ChartSelect.vue";
import EditData from "@/components/Edit/EditData.vue";
import AttrSetting from "@/components/Edit/AttrSetting.vue";
import ColorPlan from "@/components/Edit/ColorPlan.vue";

export const collapseList: ICollapseItem[] = [{
    id: "1",
    title: "图表选择",
    content: ChartSelect
}, {
    id: "2",
    title: "编辑数据",
    content: EditData
}, {
    id: "3",
    title: "属性设置",
    content: AttrSetting
}, {
    id: "4",
    title: "配色方案",
    content: ColorPlan
}]
