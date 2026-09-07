import {
  WORKSHOP_ITEM_IDS,
  WORKSHOP_ITEMS,
} from "@/lib/game-development-data";
import { fetchWorkshopItems } from "@/lib/steam-workshop";
import { WorkshopCard } from "./workshop-card";

export async function WorkshopGrid() {
  const liveItems = await fetchWorkshopItems(WORKSHOP_ITEM_IDS);
  const liveById = new Map(liveItems.map((item) => [item.id, item]));

  const items = WORKSHOP_ITEMS.map((item) => {
    const live = liveById.get(item.id);

    return {
      id: item.id,
      title: live?.title ?? item.title,
      previewUrl: live?.previewUrl ?? item.previewUrl,
      subscriptions: live?.subscriptions ?? item.subscribers,
      views: live?.views ?? item.views,
    };
  }).sort((left, right) => right.subscriptions - left.subscriptions);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <WorkshopCard key={item.id} item={item} />
      ))}
    </div>
  );
}
