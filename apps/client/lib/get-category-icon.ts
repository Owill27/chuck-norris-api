import {
  IconDeer,
  IconMovie,
  IconMusic,
  IconMicroscope,
  IconPlane,
  IconSoccerField,
  IconPodium,
  IconBuildingChurch,
  IconSchool,
  IconHeart,
  IconDeviceDesktop,
  IconRating18Plus,
  IconHanger,
  IconToolsKitchen2,
  IconCashBanknote,
  IconBuildingArch,
  IconCategory,
} from '@tabler/icons-react';

const categoriesIcons = {
  animal: IconDeer,
  career: IconSchool,
  celebrity: IconHeart,
  dev: IconDeviceDesktop,
  explicit: IconRating18Plus,
  fashion: IconHanger,
  food: IconToolsKitchen2,
  history: IconBuildingArch,
  money: IconCashBanknote,
  movie: IconMovie,
  music: IconMusic,
  political: IconPodium,
  religion: IconBuildingChurch,
  science: IconMicroscope,
  sport: IconSoccerField,
  travel: IconPlane,
};

export function getCategoryIcon(category: string) {
  const icon =
    categoriesIcons[category as unknown as keyof typeof categoriesIcons] ||
    IconCategory;

  return icon;
}
