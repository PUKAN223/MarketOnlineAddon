import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui"
import { Player, world } from "@minecraft/server"
import { MarketInput } from "./Pages/MarketInput"
/**
@param { Player } pl
**/
export function MarketMenu(pl) {
  let Menu = new ActionFormData()
  Menu.title("lore.admin_ui_home.bg")
  Menu.body("§7กรุณาเลือกสิ่งที่ต้องการจะทำ\nMarket\nEdit\nBanm
    k")
  Menu.button("Market")
  Menu.button("Edit")
  Menu.button("Bank")
  Menu.show(pl).then(res => {
    switch (res.selection) {
      case 1: 
      MarketInput(pl)
      break
    }
  })
}