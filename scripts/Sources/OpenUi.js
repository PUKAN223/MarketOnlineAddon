import { world } from "@minecraft/server";
import { MarketMenu } from "./Forms/MarketMenu"
world.events.beforeItemUse.subscribe((data) => {
  let { item, source } = data;
  let pl = source;

  if (item.typeId == "minecraft:clock") {
    MarketMenu(pl) 
  }
});
