import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui"
import { Player, world } from "@minecraft/server"

/**
@param { Player } pl
**/
export function MarketInput(pl) {
  let Input = new ModalFormData()
  Input.title("Input Forms")
  Input.dropdown("Dropdown", ["Option1", "Option2"])
  Input.slider("Slider", 1, 100)
  Input.textField("Textfiled", "Please Enter Text")
  Input.toggle("Toggle", false)
  Input.show(pl).then(res => {
    
  })
}