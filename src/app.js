
import ToolTips from "./modulos/ToolTips";
import ComentarioDinamico from "./modulos/ComentariosDinamicos"
import Dropdown from "./modulos/DropDown"
import Toast from "./modulos/Toast"

(function() {
    ToolTips.iniciar()
    ComentarioDinamico.iniciar()
    Dropdown.iniciar()

    const Ts = (conf) => {
        Toast.toast(conf)
    }

    const DY = {
        toast: (conf) => Ts(conf)
    }
    window.DY = DY
})()

export default DY