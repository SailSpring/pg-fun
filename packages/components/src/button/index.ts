import _Button from "./button.vue";
// 给每个组件添加一个install方法
import { withInstall } from '@pg-fun/utils';

export const Button = withInstall(_Button);
export default Button;